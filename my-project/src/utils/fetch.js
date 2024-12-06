//POST
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
// POST
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
// GET
// TODO:: Handle Remove this /users/c/
async function GetparamsData(info , AuthorizationTokeen) {
   
    try {
        const response = await fetch(`http://localhost:8000/api/v1/users/c/${info}`, {
            method: 'GET', 
            headers: {
                'Content-Type': 'application/json', // Add any required headers
                'Authorization':AuthorizationTokeen 
            },
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        return await response.json();  
    } catch (error) {
        console.error("Error:", error);
        return null;  // Return null or handle as needed
    }
}
// GET
async function GetPublicParamsData(info) {
   const GetData  = await fetch(`http://localhost:8000/api/v1/${info}`);
   return GetData.json()

}


export {fetchFunction ,GetRawData , GetparamsData , GetPublicParamsData}