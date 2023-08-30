import { useState, useEffect} from 'react'

//Pages
import Notes from './pages/Notes'
import Countries from './pages/Countries'
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

    </div>
  )
}

export default App