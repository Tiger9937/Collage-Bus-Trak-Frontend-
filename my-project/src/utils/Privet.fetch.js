import { useCookies } from 'react-cookie'
import {GetCokkie} from '../settings/CokkieOP.setting'

async function Privet_POST_request(methord,url) {
    try {
        const cokkie = await GetCokkie()
        let AuthorizationTokeen  = cokkie.Authorization
        const user = await fetch(`${"http://localhost:8000/api/v1"+url}`, {
            method: methord, 
            headers: {
                'Content-Type': 'application/json',
                'Authorization':AuthorizationTokeen 
            },
        })
        return await user.json()
} catch (error) {
    console.log("error",error)
}
    
}

async function Privet_POST_request_Send_Subscription_Data(methord,url,Data) {
    const cokkie = await GetCokkie()
    let AuthorizationTokeen  = cokkie.Authorization
    try {
        await fetch(`http://localhost:8000/api/v1${url}`, {
            method: methord, 
            headers: {
                'Content-Type': 'application/json',
                'Authorization':AuthorizationTokeen 
            },
            body: JSON.stringify(Data)
        });
        const data = true
        return data;
    } catch (error) {
        console.log('Error:', error);
        return false
    }
}

async function GetDataWithFile(method,url,Dataform,ContentType) {
    const cokkie = await GetCokkie()
    let ContentTypeHolder = {}
    let AuthorizationTokeen  = cokkie.Authorization

    if(ContentType !== 'none'){
        ContentTypeHolder['Content-Type'] = ContentType
        ContentTypeHolder['Authorization'] = AuthorizationTokeen 
    }
    ContentTypeHolder['Authorization'] = AuthorizationTokeen 

    try {   
         
        const response = await fetch(`http://localhost:8000/api/v1${url}`, {
                method: method, 
                headers: ContentTypeHolder,
                body: Dataform
            });   
            return await response.json();
        } catch (error) {
            console.log('Error:', error);
        }
}


async function GetparamsData(method,url,paramsData) {
    const cokkie = await GetCokkie()
    let AuthorizationTokeen  = cokkie.Authorization
    try {
        const response = await fetch(`http://localhost:8000/api/v1${url}/${paramsData}`,{
            method:method,
            headers: {
                'Authorization':AuthorizationTokeen 
            },
        })
        return await response.json();
    } catch (error) {
        console.log('Error:', error);
    }
}


export{Privet_POST_request_Send_Subscription_Data , Privet_POST_request , GetDataWithFile , GetparamsData}