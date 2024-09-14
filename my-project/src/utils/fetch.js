import {ApiError} from './error/DevError'


async function  fetchFunction(url){
    try {
        const data = await fetch(url)
        if (!data) {
            new ApiError(200,"appleaction Ferch unsussfull")
        }
        console.log(await data.json())
    } catch (error) {
        console.log("error",error)
    }
}
export {fetchFunction}