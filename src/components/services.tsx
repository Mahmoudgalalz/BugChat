import { BadgeAlert, Bot, Bug } from "lucide-react"

function Services(){
    return (
        <div className="grid sm:grid-flow-col gap-10 mx-10 sm:mx-2 justify-center mt-20 sm:mt-[20rem]">
            <div className="gap-10 flex flex-col items-center justify-center p-8 w-[23rem] sm:w-[25rem] bg-purple-400/50 border-2 border-transparent hover:border-slate-900 rounded-2xl duration-300">
                <div className="border-2 bg-white bg-opacity-20 backdrop-blur-lg drop-shadow-lg p-2 rounded-lg"><Bug size={50} /></div>
                <h1 className="text-center text-xl font-bold">Bug Reporting</h1>
                <h1 className="text-center">Receive bug, issues, and enhancement with the context needed to reproduce and fix this issue, and it can be directed to the Github issues </h1>
            </div>
            <div className="gap-10 flex flex-col items-center justify-center p-8 w-[23rem] sm:w-[25rem] bg-purple-400/50 border-2 border-transparent hover:border-slate-900 rounded-2xl duration-300">
                <div className="border-2 bg-white bg-opacity-20 backdrop-blur-lg drop-shadow-lg p-2 rounded-lg"><BadgeAlert size={50} /></div>
                <h1 className="text-center text-xl font-bold">Issues as tasks</h1>
                <h1 className="text-center">Create many issues with just one page, to post in your github repository, and reply to the opened issues from just a one focused place</h1>
            </div>
            <div className="gap-10 flex flex-col items-center justify-center p-8 w-[23rem] sm:w-[25rem] bg-purple-400/50 border-2 border-transparent hover:border-slate-900 rounded-2xl duration-300">
                <div className="border-2 bg-white bg-opacity-20 backdrop-blur-lg drop-shadow-lg p-2 rounded-lg"><Bot size={50} /></div>
                <h1 className="text-center text-xl font-bold">Be professional with AI</h1>
                <h1 className="text-center">Deliver understandable top writen description for the task, or issue you are posting on your open source repository.</h1>
            </div>
        </div>
    )
}

export default Services