import axios from 'axios'
const PORT = 5175
const BaseURL = 'http://localhost:'+PORT+'/api/blogs'

async function GetBlogs(){
    const Req = axios.get(BaseURL)
    return Req.then(res=>res.data)
}

async function Create(Obj){
    const Req = axios.post(BaseURL, Obj)
    return Req.then(res=>res.data)
}

export default{
    GetBlogs,
    Create
}