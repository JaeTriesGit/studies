export default function Country({Data, Clicked}){
    return(
        <div className='Country'>
            <button value={Data.name.common} onClick={Clicked} className=''>{Data.flag} {Data.name.official || Data.name.common} {Data.flag}</button>
        </div>
    )
}