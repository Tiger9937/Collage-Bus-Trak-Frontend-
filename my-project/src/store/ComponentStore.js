
function DataStorege(usename, email , password){
    try {
        
    localStorage.setItem('username',usename)
    localStorage.setItem('email',email)
    localStorage.setItem('password',password)
    
            
    } catch (error) {
        console.log("error",error)
    }
}
export {DataStorege}