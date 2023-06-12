import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { ChevronDown, Menu } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { useAuth } from "../hooks/AuthContext";
import { useState } from "react";

export function Header({isDash}:{isDash?:boolean}){
    const {user,logout} = useAuth();
    const [isOpen,setisOpen] = useState<boolean>(false);
    const handleStatus = ()=>{
        if(isOpen){
            setisOpen(false)
            document.getElementById('default-sidebar')?.classList.remove('-translate-x-full')
        }
        else{
            setisOpen(true)
            document.getElementById('default-sidebar')?.classList.add('-translate-x-full')
        }
    }
    if(isDash){
        return (
            <>
            <nav className="fixed z-10 w-full p-4 border-2 bg-white">
            
            <ul className="flex justify-between items-center sm:mx-36">
            <button onClick={handleStatus} data-drawer-target="default-sidebar" data-drawer-toggle="default-sidebar" aria-controls="default-sidebar" type="button" className=" text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
            <span className="sr-only">Open sidebar</span>
                <Menu/>
            </button>
                <li className="font-bold text-2xl sm:-m-20"><Link to={"/"}>BugChat</Link></li>
                <div className="flex items-center gap-10 font-bold text-md">                
                    <DropdownMenu>
                        <DropdownMenuTrigger>
                            <div className="flex sm:gap-4 items-center">
                            <Avatar>
                                <AvatarImage src={''} />
                                <AvatarFallback>BC</AvatarFallback>
                            </Avatar>
                            <h1 className=" font-semibold">{user.name}</h1> 
                            <ChevronDown/>
                            </div>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent>
                                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                                <DropdownMenuItem><Button variant={"link"}><Link to={'/profile'}>Profile</Link></Button></DropdownMenuItem>
                                <DropdownMenuItem><Button variant={"link"} onClick={logout}>Logout</Button></DropdownMenuItem>
                            </DropdownMenuContent>
                    </DropdownMenu>
                
                </div>
            </ul>
        </nav>
            </>
        )
    }
    else{
    return(
    <nav className="fixed p-4 border-2 z-10 w-full bg-white">
        <ul className="flex justify-between sm:mx-36">
            <li className="font-bold text-2xl">BugChat</li>
            <div className="flex items-center gap-10 font-bold text-md">
            <li><Link to={'/pricing'}>Pricing</Link></li>
            <li><Link to={'/docs'}>Docs</Link></li>
            <Button asChild className="group"><Link to={'/auth'}>Login</Link></Button>
            </div>
        </ul>
    </nav>
    )
    }
       
}