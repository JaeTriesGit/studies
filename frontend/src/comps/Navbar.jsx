export default function Navbar({ChangePage, userInfo, logOut}){
    return(
        <div className='Navbar'>
            <button className='NavbarCtrl' onClick={ChangePage}>Notes</button>
            <button className='NavbarCtrl' onClick={ChangePage}>People</button>
            <button className='NavbarCtrl' onClick={ChangePage}>Countries</button>
            <button className='NavbarCtrl' onClick={ChangePage}>Tests</button>
            <button className='NavbarCtrl' onClick={ChangePage}>Blogs</button>
            {userInfo && 
                <div className='UserControl'>
                    <p>Logged in as: <span>{userInfo}</span></p>
                    <button className='NavbarCtrl' onClick={logOut}>Log Out</button>
                </div>
            }
        </div>
    )
}