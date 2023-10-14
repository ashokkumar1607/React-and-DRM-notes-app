import { Link, useParams } from "react-router-dom";
import {useState,useEffect} from 'react'
import api from "../api";
import arrowleft from '../assets/arrowleft.svg'

const NotePage = () => {
    const {id:noteId}= useParams();
    const [note,setNote]=useState({})
    useEffect(()=>{
        getNote()
    },[noteId])

    const getNote=async ()=>{
        if(noteId==='new') return 
        const response=await api.get(`/note/${noteId}/`)
        setNote(response.data)
    }

    const handleSubmit = ()=>{
        if(noteId !=='new' && note.body===''){
            deleteNote()
        }else{
            api.put(`/update/${noteId}/`,note)
            getNote()
        }
        
    }

    const handleChange=(event)=>{
        const {name,value} = event.target
        setNote(prev=>{
            return {
                ...prev,
                [name]:value
            }
        })
    }

    const deleteNote=async ()=>{
        api.delete(`/delete/${noteId}/`)
    }

    const createNote=async()=>{
        api.post('/create/',note)
    }

    
    return (
    <div className="note">
        <div className="note-header">
        <h3>
            <Link to='/'>
                <img src={arrowleft} alt="" onClick={handleSubmit} />
            </Link>
        </h3>
        {noteId !== 'new' ? (
            <Link to='/'>
            <button onClick={deleteNote}>Delete</button>
            </Link>
        ):(
            <Link to='/'>
            <button onClick={createNote}>Done</button>
            </Link>
        )}
        
        
        </div>
        <textarea name='body' onChange={handleChange} value={note?.body}></textarea>
    </div> 
  )
}

export default NotePage