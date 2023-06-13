import { Github, GithubIcon, Twitter } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

export function Footer(){

 return (
    <footer className="bg-white">
    <div className="px-4 py-12 mx-auto overflow-hidden max-w-7xl sm:px-6 lg:px-8">
        <div className="flex justify-center">
            This built with Appwrite & React 
        </div>
      <div className="flex justify-center mt-8 space-x-6">
        <span className="inline-flex justify-center w-full gap-3 m-auto md:justify-start md:w-auto">
          <a className="w-6 h-6 transition fill-black hover:text-blue-500">
            <span className="sr-only">
              github
            </span>
            <Link to="https://github.com/mahmoudgalalz/bugchat" target="_blank" ><Github/></Link>
          </a>
          <a className="w-6 h-6 transition fill-black hover:text-blue-500">
            <span className="sr-only">
              twitter
            </span>
            <Link to="https://twitter.com/eitmg" target="_blank" ><Twitter/></Link>
          </a>
        </span>
      </div>
      <Link to="https://appwrite.io/" target="_blank" className="fixed left-4 bottom-4">
        <img className=" w-40" src="https://appwrite.io/images-ee/press/badge-black-button.svg" alt="Built with Appwrite"/>
      </Link>
      <p className="mt-8 text-center">
        <span className="mx-auto mt-2 text-sm text-gray-500">
          Copyright © 2023 - 2024
          <a href="https://twitter.com/eitmg" target="_blank"  className="mx-2 text-blue-500 hover:text-gray-500" rel="noopener noreferrer">
            @Kroking
          </a>
        </span>
      </p>
    </div>
  </footer>            
    
 )
}