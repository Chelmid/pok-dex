import React, { useState, useEffect } from 'react';
// on va se connecter au store pour lire le state

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

    //recupere url parametre
    let { id } = useParams();

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

export default PokemonList;