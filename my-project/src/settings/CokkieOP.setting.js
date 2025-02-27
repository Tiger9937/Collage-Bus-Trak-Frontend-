
async function GetCokkie() {
    const cokkieArray = document.cookie.split(';')
    let cokkieOBJ = {}
    cokkieArray.forEach((data)=>{
        const [key,value] = data.split('=')
        cokkieOBJ[key] = value 
    })
    return cokkieOBJ
}

async function DeleteCokkies() {
    const cokkieArray = document.cookie.split(';')
    cokkieArray.forEach((data)=>{
        let name = data.split('=')[0]
        document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`
    })
    return true
}

export {GetCokkie , DeleteCokkies}