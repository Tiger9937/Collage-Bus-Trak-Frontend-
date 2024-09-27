
async function  fetchFunction(methord,url,info){
    try {
        const data = await fetch(`${'http://localhost:8000/api/v1'+url}`,{
            method:methord,
            body:info
        })
        if (!data) {
            console.log("data is not coming")
        }
        return await data.json()
    } catch (error) {
        console.log("error",error)
    }
}

async function GetRawData(methord,url,info) {
        try {
                const user = await fetch(`${"http://localhost:8000/api/v1"+url}`, {
                    method: methord, 
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(
                        info
                    ),
                })
                return await user.json()
        } catch (error) {
            console.log("error",error)
        }
}

export {fetchFunction ,GetRawData}