export default function Navbar({ChangePage}){
    return(
        <div className='Navbar'>
            <button onClick={ChangePage}>Notes</button>
            <button onClick={ChangePage}>Countries</button>
        </div>
    )
}