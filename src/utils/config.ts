export const Server = {
    endpoint : import.meta.env.VITE_API_APPWRITE,
    project : import.meta.env.VITE_PROJECT
}

import { Client,Account } from 'appwrite'

const client = new Client()
client.setEndpoint(Server.endpoint).setProject(Server.project)

export const account = new Account(client);