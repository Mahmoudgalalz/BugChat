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
        <div className="fixed w-full z-50 bg-gradient-to-t to-[#1c1c1c] from-[#363636] from-90% overflow-hidden border-b border-white/5">
        <div className="relative w-full mx-auto max-w-7xl">
          <div className="relative flex flex-col w-full p-5 mx-auto lg:px-20 md:flex-row md:items-center md:justify-between md:px-6">
            <div className="flex flex-row items-center justify-between text-sm text-white lg:justify-start">
              <a href="/" className="font-bold text-xl"><div>BugChat</div></a>
              <button className="inline-flex items-center justify-center p-2 text-white focus:outline-none focus:text-black hover:text-black md:hidden">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M4 6h16M4 12h16M4 18h16" className="inline-flex" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path>
                  <path d="M6 18L18 6M6 6l12 12"  className="hidden" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path>
                </svg>
              </button>
            </div>
            <nav className="flex-col items-center flex-grow hidden md:flex md:flex-row md:justify-end md:pb-0">
              <a href="/pricing" className="px-2 py-2 text-sm font-medium text-white hover:text-white/50 lg:px-6 md:px-3 lg:ml-auto">Pricing</a>
              <a href="/docs" className="px-2 py-2 text-sm font-medium text-white hover:text-white/50 lg:px-6 md:px-3">Docs</a>
              <div className="inline-flex items-center gap-2 list-none lg:ml-auto">
                <Link to={"/register"} className="block px-4 mt-2 text-sm text-white hover:text-white/50 focus:outline-none focus:shadow-outline md:mt-0">
                  Register
                </Link>
              </div>
            </nav>
          </div>
        </div>
      </div>
    )
    }
       
}