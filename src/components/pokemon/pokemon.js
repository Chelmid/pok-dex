import React, { useEffect } from 'react';
// on va se connecter au store pour lire le state
import { useDispatch, useSelector } from 'react-redux';
import {
    useParams
} from "react-router-dom";

const Pokemon = () => {

    // les state dans ReducerPokemon
    const { idPokemon, dataPokemon, apiPokemonSolo, colorTypes } = useSelector(state => state.ReducerPokemon);
    const dispatch = useDispatch();

    // recupere parametre dans l'url
    let { id } = useParams();

    useEffect(() => {

        fetch(apiPokemonSolo + id)
            .then(res => res.json())
            .then(
                (data) => {
                    console.log(data)
                    //appel des dispacth dans le ReducerPokemon
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
    }, [apiPokemonSolo, id, dispatch])

    console.log(dataPokemon.types)

    return (
        <div className='mt-5'>
            <div>
                <h2 className='capitalize'>N°{idPokemon} {dataPokemon.name}</h2>
                <div className='d-flex'>{idPokemon && dataPokemon.types.map((type, i) => (
                   Object.entries(colorTypes).map((color, j) => (
                    color[0] === type.type.name ? <div key={j} className='mr-2 text-white' style={{backgroundColor: color[1]}}>{type.type.name}</div> : ''
                   ))
                    ))}</div>
                <img src={'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/' + id + '.png'} alt='' />
                <h5>{(dataPokemon.height * 10)} cm / {(dataPokemon.weight / 10)} kg </h5>
                <div className=''>{idPokemon && dataPokemon.stats.map((stat, i) => (<div key={i} className='mr-2'>{stat.stat.name} : {stat.base_stat}</div>))}</div>
            </div>
        </div>
    )
}

export default Pokemon;