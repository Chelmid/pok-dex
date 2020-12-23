import React, { useState } from 'react';
import logo from '../../logo.svg';
import { test } from '../../reducer/autres/actions-type'
// on va se connecter au store pour lire le state
import { connect } from 'react-redux';
import Pokemon from '../pokemon/pokemon';

const Home = () => {

    return (
        <div className='container'>
            <div className='text-center'>Ton pokedex</div>
           <Pokemon />
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

export default connect(mapStateToProps, mapDispatchToPros)(Home);