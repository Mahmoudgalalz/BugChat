import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { Button } from "./button"
import { Input } from "./input"
import { toast } from "./use-toast"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../hooks/form"
import { Textarea } from "./textarea"
import { RadioGroup, RadioGroupItem } from "./radio-group"
import { ToastAction } from "./toast"

const FormSchema = z.object({
  email: z.string().email({
    message: "This invalid email.",
  }),
  textarea: z.string().min(40,{message:"This should be more than 40 character"}),
  type: z.enum(["Bug", "Feature"], {
    required_error: "You need to select a report type.",
  }),
})

export function BugForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  })
  
  function onSubmit(data: z.infer<typeof FormSchema>) {
    // toast({
    //   title: "Thanks for reporting..",
    //   description: (
    //     "we will do our best with your report"
    //   ),
    // })
    toast({
      variant: "destructive",
      title: "Uh oh! Something went wrong.",
      description: "There was a problem with your request.",
      action: <ToastAction altText="Try again">Try again</ToastAction>,
    })
    //logic here
    document.getElementById('default-sidebar')?.classList.replace('-translate-y-0','translate-y-[40rem]')
    console.log(data)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-fill space-y-6">
      <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />  
        <FormField
          control={form.control}
          name="textarea"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Describe what you want to report..."
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormDescription>
              Your message will be copied to the support team.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="type"
          render={({ field }) => (
            <FormItem className="space-y-3">
              <FormLabel>Type of report</FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex flex-col space-y-1"
                >
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="Bug" />
                    </FormControl>
                    <FormLabel className="font-normal">
                      Bug
                    </FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="Feature" />
                    </FormControl>
                    <FormLabel className="font-normal">
                      Feature
                    </FormLabel>
                  </FormItem>
                </RadioGroup>
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
