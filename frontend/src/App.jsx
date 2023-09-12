import { useState, useEffect} from 'react'

//Pages
import Notes from './pages/Notes'
import People from './pages/People'
import Countries from './pages/Countries'
import Tests from './pages/Tests'
import Blogs from './pages/Blogs'
import Login from './pages/Login'
import Register from './pages/Register'

import Navbar from './comps/Navbar'
import NavbarOut from './comps/NavbarOut'
import './App.css'

const App = () => {

  const [page, setPage] = useState('Notes')
  const [user, setUser] = useState(window.localStorage.getItem('User') || null)

  return (
    <div className='Main'>

      {user ? 
        <Navbar
          ChangePage={(a)=>{
            if (a.target.outerText !== page) {
              setPage(a.target.outerText)
            } 
          }}
          userInfo={user}
          logOut={()=>{
            window.localStorage.removeItem('User')
            setUser(null)
          }}
        />
        :
        <NavbarOut
          ChangePage={(a)=>{
            if (a.target.outerText !== page) {
              setPage(a.target.outerText)
            }
          }}
        />
      }
        {
          (page==='Login' && !user) && 
          <Login
            onLog={()=>{
              const Usr = window.localStorage.getItem('User')
              if (Usr) {
                setUser(window.localStorage.getItem('User'))
                setPage('Notes')
              }
            }}
          /> 
        }
        {
          (page==='Register' && !user) && 
          <Register
            onLog={()=>{
              const Usr = window.localStorage.getItem('User')
              if (Usr) {
                setUser(window.localStorage.getItem('User'))
                setPage('Notes')
              }
            }}
          /> 
        }
        {
          (page==='Notes' && user) && <Notes/>
        }

        {
          (page==='Countries' && user) && <Countries/>
        }

        {
          (page==='Tests'&& user) && <Tests/>
        }

        {
          (page==='People' && user) && <People/>
        }

        {
          (page==='Blogs' && user) && <Blogs/>
        }

    </div>
  )
}

export default App