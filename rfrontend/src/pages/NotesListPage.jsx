import { useState, useEffect } from "react";
import api from "../api";
import ListItem from "../components/ListItem";
import AddButton from "../components/AddButton";

const NotesListPage = () => {
  let [notes, setNotes] = useState([]);

  useEffect(()=>{ 
    getNotes()
  },[notes])

  const getNotes=async()=>{
    const response=await api.get('/notes/')
    
    
    setNotes(response.data)
        
  }
  return (
  <div className="notes">
    <div className="notes-header">
      <h2 className="notes-title">&#9782; Notes</h2>
      <p className="notes-count">{notes.length}</p>
    </div>
    <div className='notes-list'>
      {notes.map(note=>{
        return <ListItem note={note} key={note.id} />
    })}
  </div>
    <AddButton />
  </div>
   )
};

export default NotesListPage;
