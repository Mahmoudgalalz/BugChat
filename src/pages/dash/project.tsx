import { Outlet, useLocation } from "react-router-dom";
import { UserDashboard } from "../../components/Dashboard/UserDashboard";
import Sidebar from "../../components/Dashboard/sidebar";

export function ProjectDash(){
    const location = useLocation();
    const path = location.pathname.split('/')[2]
    return (
        <UserDashboard main={false} location={path}>
            <>
            <Outlet />
            </>
        </UserDashboard>
    )
}