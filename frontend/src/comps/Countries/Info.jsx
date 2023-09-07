import API from '../../api/countries_api'

export default function Info({Data, Close}){
    const Lang = Object.values(Data.languages)
    const Curr = Object.values(Data.currencies)

    const Languages = Lang.map(obj => <p key={obj}>{obj}</p>)
    const Currencies = Curr.map(obj => <p key={obj.name}>{obj.name} <span>{obj.symbol}</span></p>)
    return(
        <div className='Country-Modal'>
            <button onClick={Close} className='Close'>X</button>
            <div className='Country-Main'>
                <h1>{Data.name.common || ''} {Data.flag || ''}</h1>
                <div className='Country-Info'>
                    <p><span className='TitleSpan'>Area:</span> {Data.area}</p>
                    <p><span className='TitleSpan'>Capital:</span> {Data.capital || ''}</p>
                    <p><span className='TitleSpan'>Region: </span>{Data.region}</p>
                    <p><span className='TitleSpan'>Population: </span>{Data.population}</p>
                    <div className='Languages'>
                        <p><span className='TitleSpan'>Languages:</span></p>
                        {Languages}
                    </div>
                    <div className='Currencies'>
                        <p><span className='TitleSpan'>Currencies: </span></p>
                        {Currencies}
                    </div>
                </div>
            </div>
        </div>
    )
}