import React, { useState, useEffect } from 'react';
import { test } from '../../reducer/autres/actions-type'
// on va se connecter au store pour lire le state
import { connect } from 'react-redux';

const Pokemon = (props) => {

    const pokemon = props

    console.log(pokemon.name)

    return (
        <div>
            <h1>Pokelmin</h1>
        </div>
    )
}

const mapStateToProps = state => {
    console.log(state.dragons)
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

export default connect(mapStateToProps, mapDispatchToPros)(Pokemon);