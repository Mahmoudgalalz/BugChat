import { BadgeAlert, Bug, Settings } from "lucide-react"
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
        Link:"settings",
        end:true,
    },
]
function Sidebar(){
    
    return (
<aside id="default-sidebar" className="fixed sm:mt-16 border-2 z-0 top-0 left-0 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
   
   <div className="h-full px-3 py-4 overflow-y-auto bg-white ">
      <ul className="space-y-10 sm:mt-10 mt-20 font-medium">
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

    )
}
export default Sidebar