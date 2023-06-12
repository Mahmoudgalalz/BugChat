import { useEffect, useState } from "react";
import { CreateCollections, account, register_email } from "../utils/config";
interface IAuth{
    login:any,
    logout:any,
    email_register:any,
    user:IUser,
    auth:boolean,
    loading:boolean,
    gh:boolean
}
const useAuth = ():IAuth => {
    const [user,setUser]= useState<IUser>({});
    const [auth,setAuth] = useState<boolean>(false);
    const [gh,setGh] = useState<boolean>(false);
    const [loading,setLoading] = useState<boolean>(true)
    const login = async (payload:ILogin) => {
        if(payload.type){
            try{
                await account.createEmailSession(payload.email,payload.password)
                setAuth(true)
                setLoading(false);
            }
            catch(err){
                console.error(err)
            }
        }
        else{
            try{
                await account.createOAuth2Session('github',"http://localhost:5173");
                setAuth(true);
                setLoading(false);
            }
            catch(e){
                console.error(e)
            }
        }
        
    };
    const email_register = async (email:string,password:string)=>{
        try{
            await register_email(email,password)
        }
        catch(err){
            console.log(err);
        }
    }
    const logout = async () => {
        try{
            const res = await account.deleteSession("current");
            setAuth(false);
            setUser(null);
            setLoading(true);
            window.location.reload();
            return res;
        }
        catch(e){
            console.error(e)
        }
    }

    const getUser = async () => {
        try{
            const res = await account.get();
            setLoading(false);
            if(res.prefs.gh_token){
                setGh(true);
            }
            if(!res.prefs.projects){
                await CreateCollections({id:res.$id})
            }
            return res;
        }
        catch(e){
            console.error(e)
        }
    }

    useEffect(()=>{
        const fetchUser = async () => {
            const res = await getUser();
            if(!res){
                setUser(null);
                setAuth(false);
                
            }else{
            setUser(res);
            setLoading(false);
            setAuth(true);
        }
        }
        fetchUser();
        },[]) 
    return {login,logout,user,auth,loading,gh,email_register};
}
export { useAuth }; 