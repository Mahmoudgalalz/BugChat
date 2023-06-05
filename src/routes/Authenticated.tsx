import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import { Dash } from "../pages/dash/Dash";
import { Toaster } from "../components/BugChat/components/toaster";

export function AuthenticatedRoutes(){
    return (
        <Router>
          <Routes>
            <Route path="/" element={<Dash/>}></Route>
          </Routes>
        <Toaster />
        </Router>
      )
}