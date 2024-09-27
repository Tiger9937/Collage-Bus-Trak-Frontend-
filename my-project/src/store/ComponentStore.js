
function DataStorege(info,want,isDelete){
    try {
        if(want){
            if (info) {
                localStorage.setItem('username',info)
            }
            return localStorage.getItem('username')
        }
        if(isDelete){
            localStorage.removeItem('username');
            console.log('delet success full')
        }
    } catch (error) {
        console.log("error",error)
    }
}
export {DataStorege}