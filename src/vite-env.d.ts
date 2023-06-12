/// <reference types="vite/client" />


interface ImportMetaEnv {
    readonly APP_WRITE: string
    // more env variables...
  }
  
interface ImportMeta {
    readonly env: ImportMetaEnv
}

interface IUser {
  $id?:string,
  name:string,
  email:string,
  prefs:{
    gh_token:string,
    projects:string,
    reports:string
  }
}
enum loginType{
  OAUTH = 0,
  EMAIL
}
interface ILogin{ 
  type:loginType,
  email?:string,
  password?:string
}