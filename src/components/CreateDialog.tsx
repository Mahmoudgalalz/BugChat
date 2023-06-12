import { Github } from "lucide-react";
import { Button } from "./ui/button";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { useAuth } from "../hooks/AuthContext";
import { CreateProject } from "./createProject";

function SyncGithub(){
  const url = '/redirect_gh_auth'
  window.open(url,'popup','width=1000,height=900');
}

export function CreateDialog({trigger}:{trigger:JSX.Element}){
  const {gh} = useAuth();
  let element:JSX.Element = <Button onClick={SyncGithub} className="flex gap-4"> Sync Github <Github/></Button>
  if(gh){
    element = <CreateProject/>
  }

    return (
        <Dialog>
      <DialogTrigger asChild>
        {trigger}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[30rem]">
        <DialogHeader>
          <DialogTitle>Create a Project</DialogTitle>            
        </DialogHeader>
        {element}
      </DialogContent>
    </Dialog>
    
    )
}