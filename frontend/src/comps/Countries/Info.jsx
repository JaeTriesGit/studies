export default function Info({Data, Close}){
    const Lang = Object.values(Data.languages)
    const Languages = Lang.map(obj => <p key={obj}>{obj}</p>)
    return(
        <div className='Country-Modal'>
            <button onClick={Close} className='Close'>X</button>
            <div className='Country-Main'>
                <h1>{Data.name.common || ''} {Data.flag || ''}</h1>
                <div className='Country-Info'>
                    <p><span className='TitleSpan'>Capital:</span> {Data.capital || ''}</p>
                    <div className='Languages'>
                        <p><span className='TitleSpan'>Languages:</span></p>
                        {Languages}
                    </div>
                </div>
            </div>
        </div>
    )
}