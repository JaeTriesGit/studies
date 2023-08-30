import axios from 'axios'
const baseUrl = 'https://studies.cs.helsinki.fi/restcountries/api/'

async function GetCountries(){
    const Req = axios.get(baseUrl+'all')
    return Req.then(res=>res.data)
}

async function GetCountryInfo(name){
    const Req = axios.get(baseUrl+'name/'+name)
    return Req.then(res=>res.data)
}

export default {
    GetCountries,
    GetCountryInfo
}