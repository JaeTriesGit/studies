import { useState, useEffect} from 'react'
//npx json-server --port=5174 --watch db.json

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

      <button onClick={() => {
        setShow(!show)
      }}>{show ? 'Hide Not Important' : 'Show Not Important'}</button>

      <Form 
        onSubmit={(e) => {
          
          const NObj = {
            content: e.content,
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