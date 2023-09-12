export default function Navbar({ChangePage}){
    return(
        <div className='Navbar'>
            <button className='NavbarCtrl' onClick={ChangePage}>Login</button>
            <button className='NavbarCtrl' onClick={ChangePage}>Register</button>
        </div>
    )
}