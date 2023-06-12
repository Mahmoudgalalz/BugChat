import { Octokit } from "octokit";
import { userPrefs } from "./config";



let {gh_token} = await userPrefs() || ''

const octo = new Octokit({
    auth: gh_token
})

export const git_user = async ()=> {
  try{
    const res = await octo.request('GET /user')
    return res.data.login
  }catch(err){
    console.log(err);
  }
}

export const create_issue =  async(repo:string,owner:string,data:{title:string,body:string})=>{
  try{
    const res = await octo.request('POST /repos/{owner}/{repo}/issues',{
      repo:repo,
      owner:owner,
      title:data.title,
      body:data.body
    })
    return res;
  }catch(err){
    return err;
  }
}
export const user_repos = async()=>{
  try{
    const res = await octo.request('GET /user/repos',{
      per_page:100,
      type:'owner',
      headers: {
        'X-GitHub-Api-Version': '2022-11-28'
      }
    })
    return res; 
  }
  catch(err){
    console.log(err);
  }
}


