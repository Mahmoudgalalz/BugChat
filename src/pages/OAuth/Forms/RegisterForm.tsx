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
    }),
    confirm_pass: z.string().min(8)
}).superRefine(({confirm_pass,password},ctx)=>{
    if(confirm_pass !== password){
        ctx.addIssue({
            code:"custom",
            message:"The passwords doesn't match",
            path:['confirm_pass']
        })
    }
})
export function RegisterForm() {
  const {email_register} = useAuth();
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  })
  
  async function onSubmit(data: z.infer<typeof FormSchema>) {
    try{

        await email_register(data.email,data.password)
        toast({
            title: "Account his been created",
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
        <FormField
          control={form.control}
          name="confirm_pass"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="flex items-center">Confirm Password</FormLabel>
              <FormControl>
                <Input type="password" placeholder="Confirm Password" {...field}></Input>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />  
        <Button className="w-full" type="submit">Register</Button>
      </form>
    </Form>
  )
}
