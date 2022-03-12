import React, { useState, createContext, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

export const NoteContext = createContext();

    function getInitialState() {
        const notes = localStorage.getItem('notes')
        return notes ? JSON.parse(notes) : []
    }
  
export const NoteProvider = props => {
    const [notes, setNotes] = useState(getInitialState)
    useEffect(() => {
      console.log("bruih");
      localStorage.setItem('notes', JSON.stringify(notes))
    }, [notes])
    return (
        <NoteContext.Provider value={[notes, setNotes]}>
            {props.children}
        </NoteContext.Provider>
    )
}


