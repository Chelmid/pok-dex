import React, { useState, useEffect } from 'react';
// on va se connecter au store pour lire le state
import { useDispatch, useSelector } from 'react-redux';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    useParams
} from "react-router-dom";

const Pokemon = () => {

    const { idPokemon, dataPokemon } = useSelector(state => state.ReducerPokemon);
    const dispatch = useDispatch();

    let { id } = useParams();

    useEffect(() => {

        const test = fetch('https://pokeapi.co/api/v2/pokemon/' + id)
            .then(res => res.json())
            .then(
                (data) => {
                    console.log(data)
                    dispatch({
                        type: 'SET_POKEMON_DATA',
                        data: data
                    })
                    dispatch({
                        type: 'SET_POKEMON_ID',
                        id: id
                    })
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {

                }
            )
    }, [])

    console.log(dataPokemon.name)
    console.log(idPokemon)

    return (
        <div>
            <h1>{idPokemon}</h1>
            <h1>{dataPokemon.name}</h1>
            <img src={'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/' + `${idPokemon}` + '.png'} />
        </div>
    )
}

export default Pokemon;