import React, { useState, useEffect } from 'react';
import { init } from '../../reducer/autres/actions-type'
// on va se connecter au store pour lire le state
import { connect } from 'react-redux';
import PokemonList from '../pokemon/pokemonList';
import Menu from '../menu/menu';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
} from "react-router-dom";

const Home = (props) => {

    const [pokemonList, setPokemonList] = useState([])
    
    const { pokemonId, pokemonUrl } = props

    console.log(pokemonId)

    useEffect(() => {

        const test = fetch(pokemonUrl)
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

    let count = 0

    return (
        <div className='container'>
            <Router>
            <Link to={"/"}>
                <Menu />
            </Link>
                <div className='text-center'>Ton pokedex</div>
                <ul className="d-flex flex-wrap">
                    {pokemonList.map(pokemon => (
                        <Link to={"/Pokemon/" + props.init(1)}>
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
    console.log(state)
    return {
        pokemonId : state.idPokemon,
        pokemonUrl : state.apiPokemon,
    }
}

// Dispatch sur les props 
const mapDispatchToPros = dispatch => { 
    return { init : payload => dispatch( init (payload) ) } // action.payload dans le reducer
 } 

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