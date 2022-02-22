import React from 'react';
import NoteNav from './navbar'
import NoteEdit from './noteEdit'
const SecondPage = () => {
    return(
        <div className="second-container">
            <NoteNav/>
            <NoteEdit/>
        </div>
    )
}
export default SecondPage;