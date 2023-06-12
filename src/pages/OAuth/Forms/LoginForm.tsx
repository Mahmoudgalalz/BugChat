import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { Button } from "../../../components/ui/button"
import { toast } from "../../../components/ui/use-toast"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../../hooks/form"
import { ToastAction } from "../../../components/ui/toast"
import { Input } from "../../../components/ui/input"
import { useAuth } from "../../../hooks/AuthContext"

const FormSchema = z.object({
    email: z.string().email({
        message:"Please insert a valid email"
    }),
    password: z.string().min(8,{
        message:"the password should be more than 8 characters"
    })
})

export function LoginForm() {
  const {login} = useAuth();
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  })
  
  async function onSubmit(data: z.infer<typeof FormSchema>) {
    try{

        await login({type:1,email:data.email,password:data.password})
        toast({
            title: "Redirecting to Dashboard",
          })
    }
    catch(err){
        toast({
            variant: "destructive",
            title: "Uh oh! Something went wrong.",
            description: "There was a problem with your request.",
            action: <ToastAction altText="Try again">Try again</ToastAction>,
          })
    }
    
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-fill space-y-6">
      
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Email</FormLabel>
                <Input placeholder="Email" {...field}></Input>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="flex items-center">Password</FormLabel>
              <FormControl>
                <Input type="password" placeholder="Password" {...field}></Input>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />  
        <Button className="w-full" type="submit">Login</Button>
      </form>
    </Form>
  )
}
