import { useState, useEffect} from 'react'

//Pages
import Notes from './pages/Notes'
import People from './pages/People'
import Countries from './pages/Countries'
import Tests from './pages/Tests'
import Blogs from './pages/Blogs'

import Navbar from './comps/Navbar'
import './App.css'

const App = () => {

  const [page, setPage] = useState('Notes')

  return (
    <div className='Main'>
      <Navbar
        ChangePage={(a)=>{
          if (a.target.outerText !== page) {
            setPage(a.target.outerText)
          } 
        }}
      />
      {
        page==='Notes' && <Notes/>
      }
      {
        page==='Countries' && <Countries/>
      }
      {
        page==='Tests' && <Tests/>
      }
      {
        page==='People' && <People/>
      }
      {
        page==='Blogs' && <Blogs/>
      }
    </div>
  )
}

export default App