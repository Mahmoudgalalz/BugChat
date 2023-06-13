import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Landing } from "../pages/Landing/Landing";
import { Auth } from "../pages/OAuth/Auth";
import { Redirect } from "../pages/redirect/sync_redirect";
import { GH_UserAuth } from "../pages/redirect/GithubUser-auth";
import { Login } from "../pages/OAuth/Login";
import { Recovery } from "../pages/OAuth/Recover";
import { Register } from "../pages/OAuth/Register";

export function PublicRoutes(){
    return (
        <Router>
        <Routes>
          <Route path="/" element={<Landing/>}></Route>
          <Route path="/auth" element={<Auth/>}></Route>
          
          
          {/* <Route path="/settings" element={
            <ProtectedRoute isLoggedIn={auth}>
              <UserSettings/>
            </ProtectedRoute>
          }>
          </Route> */}
          <Route path="/register" element={<Register/>}></Route>
          <Route path="/Login" element={<Login/>}></Route>
          <Route path="/recovery" element={<Recovery/>}></Route>
          <Route path="/gh_auth" element={<GH_UserAuth/>}></Route>
          <Route path="/redirect_gh_auth" element={<Redirect/>}></Route>
        </Routes>
        
      </Router>
    )
}