import { useAuth } from "./hooks/AuthContext";
import { Loading } from "./components/Loading";
import { AuthenticatedRoutes } from "./routes/Authenticated";
import { PublicRoutes } from "./routes/Public";


function App(){
  const {auth,loading} = useAuth();
  if(auth){
    if(loading){
        return <Loading/>
    }
    else{
      return <AuthenticatedRoutes/>
    }
  }
  else{
    return <PublicRoutes/>
  }
  
}
export default App