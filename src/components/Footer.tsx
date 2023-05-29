import { GithubIcon, Twitter } from "lucide-react";
import { Button } from "./ui/button";

export function Footer(){
 return (
    <>
    <div className="mt-24 bg-purple-400/50 p-6">
        <p className="mx-10 text-center">This project is a hobby project built for Developers, under <a className="underline" href="https://appwrite.io">Appwrite</a> & Hashnode Hackathon</p>
        <div className="flex flex-col items-center my-10 gap-5">
        <Button asChild variant={"outline"} className="w-36"><a href="https://twitter.com/eitmg" target="_blank">Creator <Twitter className="ml-4"/></a></Button>
        <Button asChild className="w-36"><a href="https://github.com/mahmoudgalalz/missue" target="_blank">Contribute <GithubIcon className="ml-4"/></a></Button>
        </div>
    </div>
    </>
 )
}