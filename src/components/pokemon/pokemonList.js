import React, { useState, useEffect } from 'react';
import { test } from '../../reducer/autres/actions-type'
// on va se connecter au store pour lire le state
import { connect } from 'react-redux';
import Routes from '../../router/routes'
import Pokemon from '../pokemon/pokemon'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    useParams
} from "react-router-dom";

const PokemonList = (props) => {

    const pokemon = props

    const [pokemonList, setPokemonList] = useState([])

    useEffect(() => {
        const test = fetch("https://pokeapi.co/api/v2/pokemon?limit=20")
            .then(res => res.json())
            .then(
                (data) => {
                    setPokemonList(data.results);
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {

                }
            )
    }, [])


    //recupere url parametre
    let { id } = useParams();

    /*console.log(id)
    console.log(pokemonList[id])*/

    return (
        <div>
            <div className="pokemon">
                <li className="text-center">{pokemon.count || id}</li>
                <div className="text-center">
                    <img src={'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/' + `${pokemon.count != undefined ? pokemon.count : id}` + '.png'} />
                </div>
                <li className="text-center">{pokemon.name}</li>
            </div>

        </div>
    )
}

const mapStateToProps = state => {
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

export default connect(mapStateToProps, mapDispatchToPros)(PokemonList);