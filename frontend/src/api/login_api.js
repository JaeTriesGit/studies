import axios from 'axios'
const PORT = 5175
const baseUrl = 'http://localhost:'+PORT+'/api/login'
const regBaseUrl = 'http://localhost:'+PORT+'/api/register'

async function GetLogin(cred){
    const Req = axios.post(baseUrl, cred)
    return Req.then(Res=>Res.data)
}

async function Register(cred){
    const Req = axios.post(regBaseUrl, cred)
    return Req.then(res=>res.data)
}

export default{
    GetLogin,
    Register
}