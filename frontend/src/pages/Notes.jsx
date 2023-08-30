import { useState, useEffect} from 'react'
//npx json-server --port=5173 --watch db.json

import Note from '../comps/Notes/Note'
import Form from '../comps/Notes/Form'
import Notification from '../comps/Notes/Notification'

import Notes_Api from '../api/notes_api'

import '../App.css'

const App = () => {

  const [notes, setNotes] = useState([])
  const [show, setShow] = useState(true)
  const [error, setError] = useState(null)

  useEffect(()=>{
    Notes_Api.GetNotes().then(res=>{
      setNotes(res)
    })
  }, [])

  function Important(ID){
    const ThisNote = notes.find(n=>n.id===ID)
    const Change = {...ThisNote, important: !ThisNote.important}
    Notes_Api.Update(ID, Change).then(res=>{
      setNotes(notes.map(note=>note.id!==ID?note:res))
    })
  }

  function Delete(ID){
    Notes_Api.Del(ID).catch(err => {
      setError('Note was already removed!')
      setTimeout(()=>{
        setError(null)
      }, 5000)
    })
    Notes_Api.GetNotes().then(res=>{
      setNotes(res)
    })
  }

  const ChangeHandler = (e) => {

    const a = []

    const Filtered = notes.filter((obj) => {
      const str1 = e.target.value.toLowerCase()
      const str2 = obj.name.toLowerCase()
      const got = str2.search(str1)
      if (got >= 0){
        a.push(obj)
      }
    })
    
    if (a.length > 0 && e.target.value.length > 0){
      setNotes(a)
    } else {
      Notes_Api.GetNotes().then(res=>{
        setNotes(res)
      })
    }
  }

  const NotesM = notes.map(note => 
    <Note 
      note={note} 
      toggleImportance={() => Important(note.id)}
      Delete={()=>Delete(note.id)}
      key={note.id}
    />
  )

  const NotesF = notes.map(note=>note.important && <Note 
    note={note} 
    toggleImportance={() => Important(note.id)}
    Delete={()=>Delete(note.id)}
    key={note.id}
  />)

  return (
    <div className='Main'>
      <h1>Notes</h1>
      {
        error &&
        <Notification
          err={error}
        /> 
      }
      <input onChange={ChangeHandler} 
        placeholder='Search by Name'
      />

      <button onClick={() => {
        setShow(!show)
      }}>{show ? 'Hide' : 'Show'}</button>

      <Form 
        onSubmit={(e) => {
          
          const NObj = {
            id: notes[notes.length-1].ID+1,
            name: e.name,
            number: e.number,
            important: true
          }

          Notes_Api.Create(NObj).then(res=>{
            setNotes(notes.concat(res))
          })
        }}
      />

      <div className='Notes'>

        { show ?
          NotesM
          : 
          NotesF
        }

      </div>
    </div>
  )
}

export default App