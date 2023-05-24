import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Landing } from "./pages/Landing/Landing";
import { Auth } from "./pages/OAuth/Auth";
import { Dash } from "./pages/dash/Dash";
import { useAuth } from "./hooks/AuthContext";
import ProtectedRoute from "./hooks/PrivateRoute";
import { UserSettings } from "./pages/dash/UserSettings";


function App(){
  const {auth} = useAuth();
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing/>}></Route>
        <Route path="/auth" element={<Auth/>}></Route>
        <Route path="/dashboard" element={
          <ProtectedRoute isLoggedIn={auth}>
            <Dash/>
          </ProtectedRoute>
        }>
        </Route>
        <Route path="/settings" element={
          <ProtectedRoute isLoggedIn={auth}>
            <UserSettings/>
          </ProtectedRoute>
        }>
        </Route>
      </Routes>
    </Router>
  )
}
export default App