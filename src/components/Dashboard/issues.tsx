

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { toast } from "../ui/use-toast"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../hooks/form"
import { ToastAction } from "../ui/toast"
import { Textarea } from "../ui/textarea"
import { useParams } from "react-router-dom"
import { create_issue, git_user } from "../../utils/github"
import { useEffect } from "react"
import { Bot } from "lucide-react"
import { aiPower } from "../../utils/config"
import { useAuth } from "../../hooks/AuthContext"

const FormSchema = z.object({
    title: z.string(),
    body:z.string()
})

export function Issues() {
    const {id} = useParams();
    const {user} = useAuth()
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema)
  })
  async function handleAI(e){
    e.preventDefault()
    const data = form.getValues('body')
    const res = await aiPower(data)
    console.log(res)
    // form.setValue('body',res)
  }
  async function onSubmit(data: z.infer<typeof FormSchema>) {
    try{
        const gituser = await git_user();
        await create_issue(id,gituser,data)
        form.setValue('title','')
        form.setValue('body','')
        toast({
            title: "Issues has been created",
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
        <FormLabel className="font-bold text-xl">Create Issue </FormLabel>
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input className="w-full" placeholder="title" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />  
        <FormField
          control={form.control}
          name="body"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Body</FormLabel>
              <FormControl>
                <Textarea placeholder="Body" {...field} >
                </Textarea>
              </FormControl>
              <FormDescription>
                <div className="flex items-center justify-between">
                    <h1>Give this description a power of AI</h1>
                    <Button onClick={handleAI} variant={"outline"} className=" animate-pulse border-2 border-slate-900/40 hover:text-green-700 text-red-600"><Bot/></Button>
                </div>
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Create issue</Button>
      </form>
      
    </Form>
  )
}
