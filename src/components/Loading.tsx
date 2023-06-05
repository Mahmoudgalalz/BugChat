import { Loader2 } from "lucide-react";

export function Loading(){
    return (
        <div className="flex h-screen">
            <div className="flex items-center m-auto gap-4 text-sm">Fetching what you need... <Loader2 size={30} className="animate animate-spin"/></div>
        </div>
    )
}