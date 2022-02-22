import React, {useState} from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route, Switch} from 'react-router-dom';
import AddNote from './components/newNote.js'
import FirstPage from './components/noteDisplay/firstPage.js'
import NoteDisplay from './components/noteDisplay/noteDisplay.js'
import SecondPage from './components/secondPage/secondContainer.js'
import { NoteProvider } from './noteContext';
const App = () => {

  return (
    <NoteProvider>
        <div className="App">
          
          
          
          <Router>
            <div>

              
              <Routes>

                <Route path='/notes/:id' element={<SecondPage/>}/>
                <Route path='/' element={<FirstPage/>}/>

              </Routes>
              
            </div>

          </Router>
          
          
        </div> 
    </NoteProvider>

        


  );
}


export default App;
