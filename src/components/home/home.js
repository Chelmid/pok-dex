import React, { useState, useEffect } from 'react';
import logo from '../../logo.svg';
import { test } from '../../reducer/autres/actions-type'
// on va se connecter au store pour lire le state
import { connect } from 'react-redux';
import PokemonList from '../pokemon/pokemonList';
import Menu from '../menu/menu';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    useParams
} from "react-router-dom";

const Home = (props) => {

    console.log(props)

    const [pokemonList, setPokemonList] = useState([])

    useEffect(() => {
        const test = fetch("https://pokeapi.co/api/v2/pokemon?limit=20")
            .then(res => res.json())
            .then(
                (data) => {
                    setPokemonList(data.results);
                    console.log(...data.results.keys())
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {

                }
            )
    }, [])

    let count = 1

    return (
        <div className='container'>
            <Router>
            <Link to={"/"}>
                <Menu />
            </Link>
                <div className='text-center'>Ton pokedex</div>
                <ul className="d-flex flex-wrap">
                    {pokemonList.map(pokemon => (
                        <Link to={"/Pokemon/" + count}>
                            <PokemonList name={pokemon.name} count={count = count + 1} />
                        </Link>
                    ))}
                </ul>
                <Switch>
                    <Route path="/Pokemon/:id" component={PokemonList} />
                </Switch>
            </Router>
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