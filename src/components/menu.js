import React, { useState } from 'react';
import logo from '../logo.svg';
import { test } from '../reducer/actions-type'
// on va se connecter au store pour lire le state
import { connect } from 'react-redux';



const Menu = () => {
    const [ msg, setMsg] = useState('')

    const test = async () => {
        const data =  await fetch('/api/message').then((res) =>res.json()).then(msg => setMsg(msg.msg))
    }

    return (
        <div>
            <img src={logo} className="App-logo" alt="logo" />
            <button onClick={test}>test </button>
            <div>{ msg }</div>
        </div>
    )
}
const mapStateToProps = state => {

    return {
        dragons: state.dragons,
        elements: state.elements,
        count2 : state.count2
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