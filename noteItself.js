import React, {useContext, useState} from 'react';
import {NoteContext} from '../../noteContext';
import { Route, BrowserRouter as Router, Link, Switch, useNavigate} from 'react-router-dom';


const Note = ({items}) => {
    const [notes, setNotes] = useContext(NoteContext);

    let navigate = useNavigate();
    const handleClick = () => {
        let newNotes = [];
        for (let note of notes) {

            if (note.id === items.id) {
                newNotes.push({...note, selected:true})
            } else {

                newNotes.push({...note, selected:false})
            }
        }
        setNotes(newNotes);
    }
    return (
        
        <div className="note-box" onClick={()=>{handleClick(items.id); navigate(`/notes/${items.id}`) }}>
            <h1 className="note-title">{items.title}</h1>
            <p className="note-content">{items.message}</p>
        </div>
    )

}
export default Note;