import axios from 'axios'
const PORT = 5175
const baseUrl = 'http://localhost:'+PORT+'/api/people'

async function GetPeople() {
    const Req = axios.get(baseUrl)
    return Req.then(res=>res.data)
}

async function GetNum(){
    const Req = axios.get(baseUrl)
    return Req.then(res=>res.data.length)
}

async function Create(obj) {
    const Req = axios.post(baseUrl, obj)
    return Req.then(res=>res.data)
}

async function Update(id, obj) {
    const Req = axios.put(baseUrl+'/'+id, obj)
    return Req.then(res=>res.data)
}

async function Del(id) {
    const Req = axios.delete(baseUrl+'/'+id)
    return Req.then(res=>res.data)
}

export default{
    GetPeople,
    GetNum,
    Create,
    Update,
    Del
}