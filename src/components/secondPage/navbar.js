import React, {useState, useContext} from 'react';
import NavItems from './navItems';
import {NoteContext} from '../../noteContext';
import DeleteNote from './deleteNote'



const NoteNav = () => {
    const [notes, setNotes]=useContext(NoteContext)

    const HandleNoteClick =(id) => {

        const newNoteList = notes.map(note=>{

            if(note.id===id && note.selected === false)

                return {...note ,selected:!note.selected}
            if(note.id===id && note.selected === true) 
                return {...note,selected:note.selected}

            if (note.id!==id && note.selected === true)
                return {...note,selected:!note.selected}
                
            else {
                return note;
            }
                
            
        })

        setNotes(newNoteList)

    
    }
    return(

        <div className="nav-content">
            <DeleteNote/>

            {notes.map((items)=><NavItems key={items.id} items={items} handleChange={HandleNoteClick}/>)}
        </div>




        
    )
}
export default NoteNav;
