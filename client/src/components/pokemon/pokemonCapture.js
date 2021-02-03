import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useCookies } from 'react-cookie';
import axios from 'axios';
import { useHistory } from "react-router-dom";

const PokemonCapture = (pokemon) => {
    
    const dispatch = useDispatch();
    const [cookies, removeCookie] = useCookies(['cookie-name']);
    const history = useHistory();
    const { connect,pokemonCapture, messageCapture } = useSelector(state => state.ConnectUserReducer);

    const onClickRemovePokemonListCapture = (i, e) => {
        console.log(e)
        e.preventDefault()
        dispatch({
            type: 'POKEMON_CAPTURE_REMOVE',
            pokemonCaptureRemove: i
        })
        axios.put('/pokemon/list/removeCapture', {
            email: cookies.email,
            pokemonCapture: pokemonCapture
        }).catch(error => {
            if (error) {
                dispatch({
                    type: 'CONNECT',
                    connection: false
                })
                removeCookie('connect')
                history.push('/login')
            }
        })
        
    }

    const onClickAddPokemonListCapture = (i, e) => {
        console.log(e)
        e.preventDefault()
        dispatch({
            type: 'POKEMON_CAPTURE_ADD',
            pokemonCaptureAdd: i
        })
        axios.put('/pokemon/list/addCapture', {
            email: cookies.email,
            pokemonCapture: pokemonCapture
        }).catch(error => {
            if (error) {
                dispatch({
                    type: 'CONNECT',
                    connection: false
                })
                removeCookie('connect')
                history.push('/login')
            }
        })
        
    }

    return (
        <div>

            {pokemonCapture.id.find((pokemonCapture) => (
                pokemon.id === pokemonCapture - pokemon.ratio)) ? <div>{messageCapture}</div> : ''
            }

            {pokemonCapture.id.find((pokemonCapture) => (
                pokemon.id === pokemonCapture - pokemon.ratio
            )) !== undefined ? <form onSubmit={(e) => onClickRemovePokemonListCapture(pokemon.id + pokemon.ratio, e)}> <button className={'btnEnlever'} name='pokemonTeams'></button></form> : <form onSubmit={(e) => onClickAddPokemonListCapture(pokemon.id + pokemon.ratio, e)}><button className={'btnAjouter'} name='pokemonTeams'></button></form>}
        </div>
    )
}

export default PokemonCapture