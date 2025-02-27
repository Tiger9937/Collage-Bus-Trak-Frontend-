import {Privet_POST_request} from '../utils/Privet.fetch'
 import {DeleteCokkies} from './CokkieOP.setting'

async function Logout() {

    console.log("Break point")
    const Islogout = await Privet_POST_request("POST","/users/logout")
    const DeletCokkie = await DeleteCokkies()
    if (Islogout && DeletCokkie) {
        return true
    }    

}

export{Logout}