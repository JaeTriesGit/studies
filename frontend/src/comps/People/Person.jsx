function Person({person, getDeleted}){
    
    return(
        <div className='BG'>
            <button onClick={getDeleted}>Delete</button>
            <h1><span>Name:</span> {person.name} <span>Phone:</span> {person.number}</h1>
        </div>
    )
}

export default Person