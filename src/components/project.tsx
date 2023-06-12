import { Link } from "react-router-dom";
import { Button } from "./ui/button";

interface props {
    link:string,
    name:string,
}
export function Project(props:props){
    return (
            <Button asChild className="bg-white border-2 border-slate-800/50 text-slate-800 uppercase hover:text-slate-50 w-[20rem] h-[10rem]">
                <Link to={"/project/"+props.link}>
                    {props.name}
                </Link>
                
            </Button>
    )
}