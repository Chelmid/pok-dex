import React, { useState } from 'react';
import logo from '../../logo.svg';
import { test } from '../../reducer/autres/actions-type'
// on va se connecter au store pour lire le state
import { connect } from 'react-redux';
import Home from '../home/home'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
} from "react-router-dom";
import home from '../home/home';


const Menu = () => {
    const [msg, setMsg] = useState('')

    const test = async () => {
        await fetch('/api/message').then((res) => res.json()).then(msg => setMsg(msg.msg))
    }

    return (

        <div>
            <img src={logo} className="App-logo" alt="logo" />

            <button onClick={test}>test </button>
            <div>{msg}</div>
        </div>

    )
}
const mapStateToProps = state => {
    console.log(state.pokemon)
    return {
        dragons: state.dragons,
    }
}

// Dispatch sur les props 
const mapDispatchToPros = { test }

/*
const mapDispatchToPros = dispatch => { 
    return { increment : payload => dispatch(  {type: 'INCREMENT', payload } ) } // action.payload dans le reducer
 } 
 const mapDispatchToPros = dispatch => { 
    return { increment : payload => dispatch( increment(payload) ) } // action.payload dans le reducer
 } 
 // la version courte qui marche également est la suivante 
 const mapDispatchToPros = { increment } 
*/

export default connect(mapStateToProps, mapDispatchToPros)(Menu);