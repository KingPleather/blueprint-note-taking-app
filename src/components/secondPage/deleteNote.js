import React, { useContext } from 'react';
import {useNavigate} from 'react-router-dom';

import trashicon from '../../trashicon.png'
import {NoteContext} from '../../noteContext';

const DeleteNote = () => {
    const [notes, setNotes] = useContext(NoteContext);
    let navigate = useNavigate();
    const handleDeleteNote =()=> {
        const newNotesList = notes.filter(itemChecked=>itemChecked.selected===false)
        let tempindex = 0;
        for (let i = 0; i < notes.length; i++) {
            if(notes[i].selected === true) {
                newNotesList[i] = {...newNotesList[i], selected: true}
                tempindex+=i

            }
        
        }
        setNotes(newNotesList);
        console.log(notes[tempindex].id)
        navigate(`/notes/${notes[tempindex+1].id}`)

    }
    return (

            <img src={trashicon} className="delete-icon" onClick={handleDeleteNote}/>

    )
}
export default DeleteNote