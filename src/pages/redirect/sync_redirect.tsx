import { useEffect } from "react"

export function Redirect(){
    useEffect(()=>{
        location.replace('https://github.com/login/oauth/authorize?client_id=Iv1.7c26966a87742fc0')
    })
    return (
        <h1>Redirecting...</h1>
    )
}