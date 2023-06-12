import { useEffect, useState } from "react";
import { useAuth } from "./AuthContext";
import { gh } from "../utils/github";
interface IGh{
    github:typeof gh,
    username:string
}
const useGH = ():IGh => {
    const {auth} = useAuth();
    const [github,setGh] = useState<any>()
    const [username,setUsername] = useState("")
    useEffect(()=>{
        const getuser = async()=>{
            const username = await gh.user();
            setUsername(username);
        }
        if(auth){
            setGh(gh)
            getuser();
        }
    },[])
    
    return {github,username};
}
export { useGH }; 