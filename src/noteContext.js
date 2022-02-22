import React, { useState, createContext } from 'react';
import { v4 as uuidv4 } from 'uuid';

export const NoteContext = createContext();

export const NoteProvider = props => {
    const [notes, setNotes] = useState([
            {id:uuidv4(), message:'asdfasdfffffffffffffffffffffffffffffffffffffff',title:'New Note', selected:false},
            {id:uuidv4(), message:'asdfffffffffffffffffffffffffffffffffffffff',title:'e', selected:false},
            {id:uuidv4(), message:'asdfasdfffffffffffffffffffffffffffffffffffffff',title:'New Note', selected:false},
    
            {id:uuidv4(), message:'asdfasdfffffffffffffffffffffffffffffffffffffff',title:'New Note', selected:false},
        
            {id:uuidv4(), message:'asdfasdfffffffffffffffffffffffffffffffffffffff',title:'New Note', selected:false},
    
            {id:uuidv4(), message:'asdfasdfffffffffffffffffffffffffffffffffffffff',title:'New Note', selected:false},
    
            {id:uuidv4(), message:'asdfasdfffffffffffffffffffffffffffffffffffffff',title:'New Note', selected:false},
            {id:uuidv4(), message:'asdfasdfffffffffffffffffffffffffffffffffffffff',title:'New Note', selected:false},
            {id:uuidv4(), message:'asdfasdfffffffffffffffffffffffffffffffffffffff',title:'New Note', selected:false}
    
    ])
    localStorage.setItem('notes',notes);
    return (
        <NoteContext.Provider value={[notes, setNotes]}>
            {props.children}
        </NoteContext.Provider>
    )

}