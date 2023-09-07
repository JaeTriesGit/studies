import { useState, useEffect} from 'react'

import Country from '../comps/Countries/Country'
import Info from '../comps/Countries/Info'

import API from '../api/countries_api'

const Countries = () => {

    const [countries, setCountries] = useState([])
    const [country, setCountry] = useState([])
    const [chosen, setChosen] = useState(null)

    useEffect(()=>{
        API.GetCountries().then(res=>{
            setCountries(res)
        })
    }, [])

    const ChangeHandler = (e) => {
        let Get = []
        const Search4 = e.target.value.toLowerCase()
        const Filter = countries.map(obj => {
            const Try = obj.name.official.toLowerCase() || obj.name.common.toLowerCase()
            const Search = Try.search(Search4)
            if (Search > 0) {
                Get.push(obj)
            }
        })
        if (Get.length > 0) {
            setCountry(Get)
        }
    }

    const Countries = country.map((country,i) => 
    <Country
        Data={country}
        Clicked={(e)=>{
            API.GetCountryInfo(e.target.value).then(res=>{
                setChosen(res)
            })
        }}
        key={i}
    />)

    return(
        <div>
            <input onChange={ChangeHandler} placeholder='Search by Country Name'/>
            <div className='Countries'>
                {Countries}
            </div>

            {
                chosen 
                && 
                <Info
                    Data={chosen}
                    Close={()=>{
                        setChosen(null)
                    }}
                />
            }
        </div>
    )
}

export default Countries