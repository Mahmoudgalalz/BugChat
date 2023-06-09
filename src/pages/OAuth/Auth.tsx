import { useAuth } from "../../hooks/AuthContext";
import {Button} from "../../components/ui/button"
import { Github } from "lucide-react";
import { Navigate } from "react-router-dom";
import { Loading } from "../../components/Loading";
import { RegisterForm } from "./Forms/RegisterForm";



export function Auth(){
    const {auth,login,loading} = useAuth();
    
    if(auth){
        return <Navigate to={'/'} replace/>
    }
    const handleAuth = async (e: { preventDefault: () => void; }) =>{
        e.preventDefault();
        try{
            await login();
        }
        catch(e){
            console.error(e)
        }
    }
    if(loading && auth){
        return <Loading/>
    }
    else{

    
    return(
        <>
        <section className="">
  <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen">
      <h1 className="flex items-center mb-6 text-2xl font-semibold">
          Missue
      </h1>
      <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md">
          <div className="flex flex-col sp-6 space-y-4 md:space-y-6 p-12">
              <h1 className="text-xl text-center font-bold leading-tight tracking-tight md:text-2xl">
                Access to Dashboard
              </h1>
             
              <Button onClick={handleAuth} className="group place-self-center">Continue with Github <Github className="group-hover:-translate-y-0.5 ml-2 duration-150"/></Button>
          </div>
      </div>
  </div>
</section>
        </>
    )
    }
}
