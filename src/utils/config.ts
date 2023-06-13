export const Server = {
    endpoint : import.meta.env.VITE_API_APPWRITE,
    project : import.meta.env.VITE_PROJECT
}
//@ts-ignore
import { Client,Account,Functions,Databases,ID } from 'appwrite'

const client = new Client()
client.setEndpoint(Server.endpoint).setProject(Server.project)

const functions = new Functions(client)
const database = new Databases(client)
export const account = new Account(client);

export async function RecoverPassword(email:string){
    try{
        await account.createRecovery(email,import.meta.env.BASE_URL)
    }
    catch(err){
        console.log(err)
    }
}

export const userPrefs = async ()=> {
    try{
        const res = await account.getPrefs()
        return res;
    }
    catch(err){
        console.log('not signed')
    }
}
export async function register_email(email:string,password:string){
    try{
        await account.create(ID.unique(),email,password)
    }
    catch(err){
        console.error(err);
    }
}

export async function aiPower(payload:object){
    const res = await functions.createExecution('6483d0d23dac2ca66628',JSON.stringify(payload))
    return res;
}
export const CreateCollections = async (payload:object) => {
    const res = await functions.createExecution('647e2550b8d313eaf25a',JSON.stringify(payload));
    return res;
}

export async function gh_auth(payload:object){
    const res = await functions.createExecution('647f69bd285303c923af',JSON.stringify(payload))
    return res;
}
export async function getProjects(){
    const {projects} = await account.getPrefs();
    const res = await database.listDocuments('647d4258936253967753',projects)
    return res;
}
export async function create_project({repo,reports}:{repo:string,reports:boolean},user:IUser){
    const data = {
        project:repo,
        project_id:repo,
        reports:reports,
        repo_name:repo,
        repo_id:repo
    }
    const res = await database.createDocument(
        '647d4258936253967753',
        user.prefs.projects,
        data.project_id,
        data)
    return res;
}