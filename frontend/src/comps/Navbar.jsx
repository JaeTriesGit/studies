export default function Navbar({ChangePage}){
    return(
        <div className='Navbar'>
            <button onClick={ChangePage}>Notes</button>
            <button onClick={ChangePage}>People</button>
            <button onClick={ChangePage}>Countries</button>
            <button onClick={ChangePage}>Tests</button>
            <button onClick={ChangePage}>Blogs</button>
        </div>
    )
}