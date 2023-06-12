import { Footer } from "../../components/Footer"
import { Button } from "../../components/ui/button"
import {ArrowRightSquare} from "lucide-react"
import { Link } from "react-router-dom";

import { Header } from "../../components/header";
import Services from "../../components/services";
import Who from "../../components/who";
import BugChat from "../../components/BugChat/BugChat";

export function Landing() {

  return (
    <>
    <Header/>
      <section className="pt-36 bg-white">
    <div className="sm:flex px-6 mx-auto max-w-7xl">
        <div className="w-full mx-auto text-left">
            <h1 className="mb-8 text-4xl font-extrabold leading-none tracking-normal text-gray-900 md:text-6xl md:tracking-tight">
                <span>Create</span> <span className="block w-full py-2 text-transparent bg-clip-text leading-12 bg-gradient-to-r from-pink-600 to-purple-500 lg:inline">Bulk Issues</span> <span>On Github repos with AI</span>
            </h1>
            <p className="mb-8 text-lg text-gray-600 md:text-xl">
                Open Issues as tasks on an open-source project with no limits, and refine them with AI to have a professional feel.
            </p>
            <Button asChild className="group"><Link to={'/auth'}>Get Started <ArrowRightSquare className="group-hover:translate-x-2 duration-150"/></Link></Button>
        </div>
        <div className="w-full max-sm:mt-20 sm:ml-[20rem] text-center md:w-10/12">
            <div className="relative z-0 w-full">
                <div className="relative overflow-hidden">
                    <img src="./hero.png"/>
                </div>
            </div>
        </div>
    </div>
</section>
    <BugChat/>
    <Services/>
    <Who/>
    <Footer/>
    </>
  )
}

