import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import { Dash } from "../pages/dash/Dash";
import { GH_UserAuth } from "../pages/redirect/GithubUser-auth";
import { Redirect } from "../pages/redirect/sync_redirect";
import { ProjectDash } from "../pages/dash/project";
import { Issues } from "../components/Dashboard/issues";
import { Profile } from "../components/profile/settings";
import { Register } from "../pages/OAuth/Register";
import { Login } from "../pages/OAuth/Login";

export function AuthenticatedRoutes(){
    return (
        <Router>
          <Routes>
            <Route path="/" element={<Dash/>}></Route>
            <Route path="/profile" element={<Profile/>}></Route>
            <Route path="/gh_auth" element={<GH_UserAuth/>}></Route>
            <Route path="/redirect_gh_auth" element={<Redirect/>}></Route>
            <Route path="/register" element={<Register/>}></Route>
            <Route path="/Login" element={<Login/>}></Route>
            <Route path="project/:id" element={<ProjectDash/>}>
              <Route path="create" element={<Issues/>}></Route>
              <Route path="reports" element={<Issues/>}></Route>
              <Route path="settings" element={<Issues/>}></Route>
            </Route>
          </Routes>
        </Router>
      )
}