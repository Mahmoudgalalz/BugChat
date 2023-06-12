import { Check, ChevronsUpDown } from "lucide-react"
import { cn } from "../.../../../lib/utils"
import { Button } from "./ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "./ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "./ui/popover"
import { useEffect, useState } from "react";
import { Loading } from "./Loading";
import { user_repos } from "../utils/github"

let repositories: { label: string; value: string; }[] = []

export function ReposComobobox(){
    const [open, setOpen] = useState(false)
    const [value, setValue] = useState("")
    const [loading,setLoading] = useState(true);
    useEffect(()=>{
        async function repos(){
            const res = await user_repos();
            data(res)
            setLoading(false);
        }   
        function data(res){
            repositories=[];
            res.data.map(res=>{
                repositories.push({label:res.name,value:res.name})
            })
        }
        repos();
    },[])
  
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between"
        >
          {value
            ? repositories.find((repository) => repository.value === value)?.label
            : "Select repository..."}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0 ">
        <Command>
          <CommandInput placeholder="Search repository..." />
          <CommandEmpty>No repo found.</CommandEmpty>
          <CommandGroup className="">
            {loading && 
              <CommandItem>
                <Loading/>
              </CommandItem>
            }
            {repositories.map((repository) => (
              <CommandItem
                key={repository.value}
                onSelect={(currentValue) => {
                  setValue(currentValue === value ? "" : currentValue)
                  setOpen(false)
                }}
              >
                <Check
                  className={cn(
                    "mr-2 h-4 w-4",
                    value === repository.value ? "opacity-100" : "opacity-0"
                  )}
                />
                {repository.label}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  )
}





