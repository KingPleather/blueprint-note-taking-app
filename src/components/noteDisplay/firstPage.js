import React from 'react';
import {NoteDisplay} from './noteDisplay';
import AddNote from '../newNote';
import '../../App.css'

const FirstPage = () => {
    return (
        <div className='first-page'>
            <h1 className="app-title">My notes</h1>
            <AddNote/>
            <NoteDisplay/>
            
        </div>

    )
}
export default FirstPage