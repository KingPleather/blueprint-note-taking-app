import React, {useContext, useState} from 'react';
import {NoteContext} from '../../noteContext';
import AddNote from '../secondNewNote.js'


const NoteEdit =()=> {
    const [notes, setNotes] = useContext(NoteContext);
    const [title, setTitle] = useState('');
    const [message, setMessage] = useState('');
    const [newHeader] = useState();
    const [newContent] = useState();
    const content = notes.filter(itemChecked=>itemChecked.selected).map(item=>item.message)
    const header = notes.filter(itemChecked=>itemChecked.selected).map(item=>item.title);
    let idWeWant = '';
    if (notes.filter(itemChecked=>itemChecked.selected).length){
        idWeWant = notes.filter(itemChecked=>itemChecked.selected)[0].id    
    } else {
    }
    const handleTitleEdit =()=> {
        let newNotes = [];

        
        for (let note of notes) {

            if (note.id === idWeWant) {
                console.log(title);
                newNotes.push({...note, title:title})
                console.log(newNotes);
            } else {

                newNotes.push(note)
            }
        }
        setNotes(newNotes);
    }
    const handleMessageEdit =()=> {
        let newNotes = [];

        
        for (let note of notes) {

            if (note.id === idWeWant) {
                console.log(title);
                newNotes.push({...note, message:message})
                console.log(newNotes);
            } else {

                newNotes.push(note)
            }
        }
        setNotes(newNotes);
    }



    return (
        <div className= "note-edit-container" key={idWeWant}>
            <AddNote/>


            <input type="text" className="note-edit-title" defaultValue={header} onChange={e=>setTitle(e.target.value)} onBlur={()=>handleTitleEdit()}></input>
            <input type="text" className="note-edit" defaultValue={content} onChange={e=>setMessage(e.target.value)} onBlur={()=>handleMessageEdit()}></input> 
        </div>


    )

}
export default NoteEdit;