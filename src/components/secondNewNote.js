import React, {useContext} from 'react';
import { Route, BrowserRouter as Router, Link, Switch, useNavigate, Navigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import {NoteContext} from '../noteContext';
import addicon from '../addicon.png';


const AddNote = () => {
    const [notes, setNotes] = useContext(NoteContext);
    let navigate = useNavigate();
    const handleClick = () => {
        
        const newNote = {id: uuidv4(), title: "Untitled", message: "Add Something!", selected: true}
        const newNotesList = notes.map(note=> {
            if (note.selected === true) {
                return {...note, selected:!note.selected}
            }
            else {
                return note
            }
        })
        const NotesList = [newNote ,...newNotesList ]

        setNotes(NotesList);
        navigate(`/notes/${NotesList[0].id}`)

        


    }
    return (
            <div onClick={handleClick} className="second-add-note">
                    <img src={addicon} style={{float:'left'}}/>
                    <h5 >New note</h5>

            </div>

        



    )

}
export default AddNote;


