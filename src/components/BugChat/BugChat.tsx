import { Bug, } from "lucide-react"
import { Link } from "react-router-dom"
import { Button } from "./components/button"
import { useState } from "react"
import { BugForm } from "./components/bugForm";


function BugChat(){
    const [btnState, setBtnState] = useState<boolean>(false);

    const btnHandler = (e)=>{
        e.preventDefault();
        if(btnState){
            setBtnState(false);
            document.getElementById('default-sidebar')?.classList.replace('-translate-y-0','translate-y-[40rem]')
        }
        else {
            setBtnState(true)
            document.getElementById('default-sidebar')?.classList.replace('translate-y-[40rem]','-translate-y-0')
        }
    }

    return (
        <>
        {btnState && 
        <Button id="outlinedbtn" variant={"outline"} onClick={btnHandler} data-drawer-target="default-sidebar" data-drawer-toggle="default-sidebar" aria-controls="default-sidebar" type="button" className="fixed z-0 bottom-0 right-0 m-4 rounded-full p-2 px-2 hover:scale-110 transition-transform duration-300">
            <Bug/>
        </Button>
        }
        {!btnState &&
        <Button onClick={btnHandler} data-drawer-target="default-sidebar" data-drawer-toggle="default-sidebar" aria-controls="default-sidebar" type="button" className="fixed z-0 bottom-0 right-0 m-4 rounded-full p-2 px-2 hover:scale-110 transition-transform duration-300">
                <Bug/>
                <h1 className="text-xs">Report</h1>
        </Button>
        }
   
<aside id="default-sidebar" className="fixed border-2 overflow-hidden mx-2 bottom-20 right-0 z-30 shadow-lg w-80 h-1/2 rounded-3xl transition-transform duration-500 translate-y-[40rem]" aria-label="Sidebar">
   <div className="h-full px-3 py-4 overflow-y-auto bg-white">
        <ul className="space-y-10 font-medium">                
            <div className="flex justify-center">Report Bug or Feature</div>
            <BugForm/>
        </ul>
        <div className=" relative bottom-0">
            <span className="text-xs">BugChat 2023</span> 
        </div>
   </div>
</aside>

        </>
    )
}
export default BugChat