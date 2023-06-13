import { AlertTriangle, BadgeAlert, Bot, BotIcon, Bug, BugIcon } from "lucide-react"

function Services(){
    return (
        <section aria-labelledby="feature-three" id="feature-three" className="overflow-y-auto bg-white lg:h-screen">
                <div className="px-8 py-24 mx-auto lg:px-16 max-w-7xl md:px-12 xl:px-36 lg:flex">
                  <div className="lg:w-1/2">
                    <div className="top-0 pt-20 pb-16 lg:sticky">
                      <div>
                        <div className="lg:pr-24 md:pr-12">
                          <div>
                            <p className="text-2xl font-medium tracking-tight text-black sm:text-4xl">
                              I am a short heading with in a sticky and scrollable section
                            </p>
                            <p className="max-w-xl mt-4 text-lg tracking-tight text-gray-600">
                              You are not your mistakes, you are not your struggles, and you
                              are here NOW with the power to shape your day and your future
                            </p>
                          </div>
                          <div className="flex flex-col items-center justify-center gap-3 mt-10 lg:flex-row lg:justify-start">
                            <a href="#" className="items-center justify-center w-full px-6 py-2.5 text-center text-white duration-200 bg-black border-2 border-black rounded-full nline-flex hover:bg-transparent hover:border-black hover:text-black focus:outline-none lg:w-auto focus-visible:outline-black text-sm focus-visible:ring-black">
                              Get started
                            </a>
                            <a href="#" className="inline-flex items-center justify-center text-sm font-semibold text-black duration-200 hover:text-blue-500 focus:outline-none focus-visible:outline-gray-600">
                              Learn more
                              <span aria-hidden="true"> → </span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="lg:w-1/2">
                    <div className="flex-shrink-0">
                      <div className="">
                        <ul className="grid grid-cols-1 gap-12 mt-6 list-none lg:mt-0 lg:gap-24" role="list">
                          <li>
                            <div>
                              <div className="flex items-center justify-center w-12 h-12 text-black bg-gray-100 rounded-xl">
                                <BugIcon/>
                              </div>
                              <p className="mt-5 text-lg font-medium leading-6 text-black">
                              Bug Reporting
                              </p>
                            </div>
                            <div className="mt-2 text-base text-gray-500">
                            Receive bug, issues, and enhancement with the 
                            context needed to reproduce and fix this issue, 
                            and it can be directed to the Github issues.
                            </div>
                          </li>
                          
                          <li>
                            <div>
                              <div className="flex items-center justify-center w-12 h-12 text-black bg-gray-100 rounded-xl">
                                <BadgeAlert/>
                              </div>
                              <p className="mt-5 text-lg font-medium leading-6 text-black">
                              Issues as tasks
                              </p>
                            </div>
                            <div className="mt-2 text-base text-gray-500">
                            Create many issues with just one page,
                            to post in your github repository,
                            and reply to the opened issues from
                            just a one focused place.
                            </div>
                          </li>
                          <li>
                            <div>
                              <div className="flex items-center justify-center w-12 h-12 text-black bg-gray-100 rounded-xl">
                                <BotIcon/>
                              </div>
                              <p className="mt-5 text-lg font-medium leading-6 text-black">
                              Be professional with AI
                              </p>
                            </div>
                            <div className="mt-2 text-base text-gray-500">
                            Deliver understandable top writen description 
                            for the task, or issue you are posting
                            on your open source repository.
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
    )

}

export default Services