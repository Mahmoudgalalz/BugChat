import { useEffect, useState } from "react";
import { account } from "../utils/config";

const useAuth = () => {
    const [user,setUser]= useState(null);
    const [auth,setAuth] = useState(false);
    const login = async () => {
        try{
            await account.createOAuth2Session('github',"http://localhost:5173/dashboard");
            setAuth(true);
        }
        catch(e){
            console.error(e)
        }
    };
    const logout = async () => {
        try{
            const res = await account.deleteSession("current");
            setAuth(false);
            setUser(null);
            return res;
        }
        catch(e){
            console.error(e)
        }
    }
    const getUser = async () => {
        try{
            const res = await account.get();
            return res;
        }
        catch(e){
            console.error(e)
        }
    }

    useEffect(()=>{
        const fetchUser = async () => {
            const res = await getUser();
            if(res === undefined){
                setUser(null);
                setAuth(false);
            }else{
            setUser(res);
            setAuth(true);
        }
        }
        fetchUser();
        },[]) 
    return {login,logout,user,auth};
}
export { useAuth }; 