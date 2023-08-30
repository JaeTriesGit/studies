function Note({note, toggleImportance, Delete}){
    const tx = note.important ? 'IMPORTANT' : 'NOT IMPORTANT'
    return(
        <div className='BG'>
            <button className='Important' onClick={toggleImportance}>{tx}</button>
            <button className='Del' onClick={Delete}>Delete Note</button>
            <h1><span>Name:</span> {note.name} <span>Phone:</span> {note.number}</h1>
        </div>
    )
}

export default Note