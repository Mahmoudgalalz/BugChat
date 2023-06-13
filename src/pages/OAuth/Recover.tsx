import { RecoverForm } from "./Forms/RecoverForm";



export function Recovery(){
    
    return(
        <>
        <section className="">
  <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen">
      <h1 className="flex items-center mb-6 text-2xl font-semibold">
          BugChat
      </h1>
      <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md">
          <div className="flex flex-col sp-6 space-y-4 md:space-y-6 p-12">
              <h1 className="text-xl text-center font-bold leading-tight tracking-tight md:text-2xl">
                Send the verification Code
              </h1>
              <div>
                <RecoverForm/>
              </div>
          </div>
      </div>
  </div>
</section>
        </>
    )
}

