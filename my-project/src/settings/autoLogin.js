import { fetchFunction } from '../utils/fetch';
const autoLogin = async()=>{
      let email = localStorage.getItem('email')
      let password = localStorage.getItem('password')
      const loginUser = await fetchFunction('POST', '/users/login', JSON.stringify({email:email,password:password}))
      
      if(loginUser.success){
        localStorage.clear()
        return loginUser.data.Access_Token
      }
      localStorage.clear()  
}

export default autoLogin