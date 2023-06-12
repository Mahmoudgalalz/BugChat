import { Plus } from "lucide-react";
import { Header } from "../header";
import { Button } from "../ui/button";
import { CreateDialog } from "../CreateDialog";
import Sidebar from "./sidebar";

interface props{
    children:JSX.Element,
    location:string,
    main:boolean
}
export function UserDashboard({children,location,main}:props){

    return (
        <>
        <Header isDash/>
            <div className={!main ? "fixed flex pt-[10rem] mx-[20rem] justify-start mb-10" : " fixed top-[4.5rem] w-full bg-gray-400 pt-[10rem] mb-10"}>
                <h1 className="fixed text-2xl font-bold top-[8rem] left-[20rem]">{location}</h1>
                {main && <CreateDialog trigger={<Button className=" fixed top-[8rem] z-10 right-[20rem]">Create Project <Plus className="ml-4"/> </Button>}/>}
            </div>
            <div className={main ? "sm:mx-[20rem] pt-[18rem] p-4 overflow-auto grid grid-flow-row sm:grid-cols-3 gap-6 rounded-xl":"sm:mx-[20rem] p-4"}>
            {children}
            </div>
            {!main && <Sidebar/>}
        </>
    )
}