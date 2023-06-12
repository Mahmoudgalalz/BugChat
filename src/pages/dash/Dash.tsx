import { useAuth } from "../../hooks/AuthContext";
import { UserDashboard } from "../../components/Dashboard/UserDashboard";
import { Loading } from "../../components/Loading";
import { Project } from "../../components/project";
import { useEffect, useState } from "react";
import { getProjects } from "../../utils/config";


export function Dash(){
    const {loading} = useAuth();
    const [data,setData] = useState<Array<any>>([]);
    useEffect(()=>{
        const projects = async ()=>{
            const res = await getProjects();
            setData(res.documents)
        }
        projects();
    },[])
    if(loading){
        return <Loading/>
    }
    return (
        <UserDashboard main location="Projects">
            <>
            {
                data.map(project=>{
                    return <Project link={project.project_id} name={project.project}/>
                })
                
            }
            </>
        </UserDashboard>
    )
}