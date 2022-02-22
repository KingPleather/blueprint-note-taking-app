import React, {useState} from 'react';
import NoteNav from './navbar'
import { Route, BrowserRouter as Router, Link, Switch, useNavigate} from 'react-router-dom';

const NavItems =({items, handleChange}) => {
    let navigate = useNavigate();
    return (
            <div  onClick={()=>{handleChange(items.id); navigate(`/notes/${items.id}`) }} className= {items.selected?"second-note-box-selected":'second-note-box'} >
                <h1 className="note-nav-title">{items.title}</h1>
                <p className="note-nav-content">{items.message}</p>
            </div>

    )
}
export default NavItems;