import { Footer } from "./components/Footer";
import { Header } from "./components/header";
import Services from "./components/services";
import Who from "./components/who";

export function Test(){
    return (
        <section className="bg-gradient-to-t from-[#030303] to-[#363636]">
                <Header isDash={false} />
                <div className="max-sm:pt-20 flex flex-col items-center justify-center">
                  <div className="relative items-center w-full px-5 pt-12 mx-auto max-w-7xl lg:pt-36 lg:px-16 md:px-12">
                    <div className="max-w-3xl mx-auto text-center">
                      <p className="text-4xl font-extrabold tracking-tight text-white md:text-6xl">
                        <span className="block w-full py-2 text-transparent bg-clip-text leading-12 bg-gradient-to-r from-white from-2% to-50% to-violet-800 lg:inline">Bug reporting</span> <span>for web apps</span>
                        <span className="md:block"> has never been easier</span>
                      </p>
                      <p className="max-w-xl mx-auto mt-8 text-base lg:text-xl text-slate-300">
                      Open Issues as tasks on an open-source project with no limits, and refine them with AI to have a professional sound,
                      Built-in reports SDK  for your web app. 
                      </p>
                    </div>
                    <div className="flex flex-col justify-center gap-3 mt-10 sm:flex-row">
                      <a href="/register" className="items-center inline-flex focus:outline-none justify-center text-white bg-[#5b03e3] duration-200 focus-visible:outline-black focus-visible:ring-black font-medium hover:bg-transparent hover:border-white hover:text-white lg:w-auto px-6 py-3 rounded-full text-center w-full">Get started</a>
                    </div>
                  </div>
                  <div className="relative items-center w-full py-12 pb-12 mx-auto mt-12 max-w-7xl">
                    <img alt="Dashboard of BugChat" className="relative object-cover w-full rounded lg:rounded-2xl" src="https://zeabur.com/images/screenshot.png"/>
                  </div>
                </div>
                <Services/>
                <Who/>
                <Footer/>
              </section>
    )
}