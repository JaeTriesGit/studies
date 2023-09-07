import { useState, useEffect} from 'react'

import Person from '../comps/People/Person'
import Form from '../comps/People/Form'
import Error from '../comps/Error'

import API from '../api/people_api'

import '../App.css'

const App = () => {

  const [people, setPeople] = useState([])
  const [error, setError] = useState()

  useEffect(()=>{
    API.GetPeople().then(res=>{
      setPeople(res)
    })
  }, [])

  const ChangeHandler = (e) => {

    const a = []

    const Filtered = people.filter((obj) => {
      const str1 = e.target.value.toLowerCase()
      const str2 = obj.name.toLowerCase()
      const got = str2.search(str1)
      if (got >= 0){
        a.push(obj)
      }
    })
    
    if (a.length > 0 && e.target.value.length > 0){
      setPeople(a)
    } else {
      API.GetPeople().then(res=>{
        setPeople(res)
      })
    }
  }

  function Err(msg, s){
    const Time = s*1000
    setError(msg)
    setTimeout(()=>{
      setError(null)
    }, Time)
  }

  function GetDuplicate(Table, Key, toFind){
    //console.log(Table, Key, toFind)
    const Find = Table.find(data=>data[Key]===toFind)
    return Find
  }

  function handleDel(ID){
    API.Del(ID).catch(err => {
      console.log(err)
    })
    API.GetPeople().then(res=>{
      setPeople(res)
    })
  }

  const People = people.map(person => 
    <Person 
      person={person}
      getDeleted={()=>{handleDel(person.id)}}
      key={person.id}
    />
  )

  return (
    <div className='Main'>
      {
        error && <Error ErrorHandler={error}/>
      }
      <h1>People</h1>
      <input onChange={ChangeHandler} 
        placeholder='Search by Name'
      />
      <Form
        onSubmit={(e)=>{
          const Dupe = GetDuplicate(people, 'name', e.name)

          const NewPerson = {
            name:e.name,
            number:e.number
          }

          if (!Dupe) {
            API.Create(NewPerson).then(res=>{
              setPeople(people.concat(res))
            }).catch(error=>{alert(error)})
          } else {
            API.Update(Dupe.id, NewPerson).then(res2=>{
              API.GetPeople().then(res=>{
                setPeople(res)
                Err('Duplicate found, updated number.', 3)
              })
            }).catch(error=>{Err(error)})
          }
        }}
      />
      {People}
    </div>
  )
}

export default App