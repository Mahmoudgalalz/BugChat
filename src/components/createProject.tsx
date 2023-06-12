import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { Button } from "./ui/button"
import { toast } from "./ui/use-toast"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../hooks/form"
import { ToastAction } from "./ui/toast"
import { Switch } from "./ui/switch"
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover"
import { useEffect } from "react"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem } from "./ui/command"
import { ChevronsUpDown, Check } from "lucide-react"
import { cn } from "../../lib/utils"
import { create_project } from "../utils/config"
import { useAuth } from "../hooks/AuthContext"
import { user_repos } from "../utils/github"

const FormSchema = z.object({
    repo: z.string({
        required_error: "Please select a repo.",
      }),
    reports:z.boolean().default(false)
})
let repositories: { label: string; value: string }[] = []
export function CreateProject() {
    const {user} = useAuth();
    useEffect(()=>{
        async function repos(){
            const res = await user_repos();
            data(res)
        }   
        function data(res){
            repositories=[];
            res.data.map(res=>{
                repositories.push({label:res.name,value:res.name})
            })
        }
        repos();
    },[])
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  })
  
  async function onSubmit(data: z.infer<typeof FormSchema>) {
    try{
        await create_project(data,user)
        toast({
            title: "Project is created",
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
          name="repo"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Repository</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant="outline"
                      role="combobox"
                      className={cn(
                        "w-[200px] justify-between",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      {field.value
                        ? repositories.find(
                            (repository) => repository.value === field.value
                          )?.label
                        : "Select repo"}
                      <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-[200px] p-0">
                  <Command>
                    <CommandInput placeholder="Search repo..." />
                    <CommandEmpty>No repo found.</CommandEmpty>
                    <CommandGroup>
                      {repositories.map((repository) => (
                        <CommandItem
                          value={repository.value}
                          key={repository.value}
                          onSelect={(value) => {
                            form.setValue("repo", value)
                          }}
                        >
                          <Check
                            className={cn(
                              "mr-2 h-4 w-4",
                              repository.value === field.value
                                ? "opacity-100"
                                : "opacity-0"
                            )}
                          />
                          {repository.label}
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </Command>
                </PopoverContent>
              </Popover>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="reports"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="flex items-center">Allow reports</FormLabel>
              <FormControl>
              <Switch
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />  
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}
