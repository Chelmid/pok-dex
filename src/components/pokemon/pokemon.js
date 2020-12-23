import React, { useState, useEffect } from 'react';
import { test } from '../../reducer/autres/actions-type'
// on va se connecter au store pour lire le state
import { connect } from 'react-redux';



const Pokemon = () => {

    const [pokemonList, setPokemonList] = useState([])

    useEffect(() => {
        const test = fetch("https://pokeapi.co/api/v2/pokemon?limit=1118")
            .then(res => res.json())
            .then(
                (data) => {
                    setPokemonList(data.results);
                    console.log(...data.results.keys())
                    console.log(...data.results.keys())
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {

                }
            )
    }, [])

    const detail = () => {
        console.log('click')
    }

    let count = 1

    return (
        <div>
            <ul className="d-flex flex-wrap">
                {pokemonList.map(pokemon => (
                    <div className="pokemon" key={count = count + 1}>
                        <a href='' >
                            <li className="text-center">{count}</li>
                            <div className="text-center">
                                <img src={`${'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/' + count + '.png'}`} />
                            </div>
                            <li className="text-center">{pokemon.name}</li>
                        </a>
                    </div>
                ))}
            </ul>
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