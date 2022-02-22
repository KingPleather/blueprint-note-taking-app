import React, {useContext} from 'react';
import Note from './noteItself';
import { v4 as uuidv4 } from 'uuid';
import {NoteContext} from '../../noteContext';



const NoteDisplay = () => {
    const [notes, setNotes] = useContext(NoteContext);

    return (
        <div className="note-container">
            {notes.map((items)=><Note items={items}/>)}
        </div>
    )

}
export {NoteDisplay};
