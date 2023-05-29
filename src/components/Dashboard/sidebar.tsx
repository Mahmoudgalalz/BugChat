import { BadgeAlert, Bug, Menu, Settings, X } from "lucide-react"
import { Link } from "react-router-dom"

const sideElements = [
    {
        icon:<BadgeAlert/>,
        title:"Create Issues",
        Link:"create",
        end:false,
    },
    // {
        // icon:<BadgeAlert/>,
        // title:"Issues Chat",
        // Link:"create"
    // },
    {
        icon:<Bug/>,
        title:"Issues Report",
        Link:"reports",
        end:false,
    },
    {
        icon:<Settings/>,
        title:"settings",
        Link:"/settings",
        end:true,
    },
]
function Sidebar(){
    const OpenSideBar = ()=>{
        document.getElementById('default-sidebar')?.classList.remove('-translate-x-full')
    }
    const CloseSideBar = ()=>{
        document.getElementById('default-sidebar')?.classList.add('-translate-x-full')
    }
    return (
        <>
            <button onClick={OpenSideBar} data-drawer-target="default-sidebar" data-drawer-toggle="default-sidebar" aria-controls="default-sidebar" type="button" className="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
            <span className="sr-only">Open sidebar</span>
                <Menu/>
            </button>

<aside id="default-sidebar" className="fixed sm:mt-16 border-2 top-0 left-0 z-0 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
   
   <div className="h-full mt-14 px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
   <div className="sm:hidden flex justify-end">
        <button onClick={CloseSideBar} className="p-1 border-2 rounded-lg"><X></X></button>
   </div>
      <ul className="space-y-10 font-medium">
         {
            sideElements.map(element=>{
                return (
                    <li className="flex">
                        <Link to={element.Link} className={`flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 ${element.end ? "self-end": ""}`}>
                            {element.icon}
                            <span className="ml-3">{element.title}</span>
                        </Link>
                    </li>
                )
            })
         }
        </ul>
        <div className="fixed bottom-2 sm:bottom-20">
            <span className="font-bold">BugChat</span> 2023
        </div>
   </div>
</aside>

        </>
    )
}
export default Sidebar