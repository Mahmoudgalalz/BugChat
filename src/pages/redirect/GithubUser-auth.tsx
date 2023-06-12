import { gh_auth } from "../../utils/config";
import { useAuth } from "../../hooks/AuthContext";
import { useEffect } from "react";
export function GH_UserAuth(){
        const {user} = useAuth();
        useEffect(()=>{
            async function auth_gh(){
                const queryParams = new URLSearchParams(location.search);
                const code = queryParams.get('code');           
                const payload= {
                    id:user.$id,
                    code:code
                }
                await gh_auth(payload)
                window.close();
                
            }
            auth_gh();
        },[])

    
    return (
        <>
        <h1>You will be redirected to the app</h1>
        </>
    )
}