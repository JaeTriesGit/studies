import axios from 'axios'
const baseUrl = 'https://studies.cs.helsinki.fi/restcountries/api/'
const WeatherUrl = 'https://api.openweathermap.org/data/2.5/weather?q='
//const KEY = process.env.DAKEY

async function GetCountries(){
    const Req = axios.get(baseUrl+'all')
    return Req.then(res=>res.data)
}

async function GetCountryInfo(name){
    const Req = axios.get(baseUrl+'name/'+name)
    return Req.then(res=>res.data)
}

/*async function GetCountryWeather(name){
    const Req = axios.get(WeatherUrl+name+'&appid='+KEY)
    return Req.then(res=>res.data)
}*/

export default {
    GetCountries,
    GetCountryInfo,
    //GetCountryWeather
}