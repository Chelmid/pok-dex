import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useCookies } from 'react-cookie';
import axios from 'axios';
import { useHistory } from "react-router-dom";

const PokemonCapture = (pokemon) => {

    //disoatch, cookies, history, reducer
    const dispatch = useDispatch();
    const [cookies, removeCookie] = useCookies(['cookie-name']);
    const history = useHistory();

    const { connect, pokemonTeams, messageTeam } = useSelector(state => state.ConnectUserReducer);

    //add pokemon in team
    const onClickAddPokemonListTeam = (i, e) => {
        e.preventDefault()
        dispatch({
            type: 'POKEMON_TEAM_ADD',
            pokemonTeamAdd: i
        })
        axios.put('/pokemon/list/addTeam', {
            email: cookies.email,
            pokemonTeams: pokemonTeams
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

    //remove pokemon in team
    const onClickRemovePokemonListTeam = (i, e) => {
        e.preventDefault()
        dispatch({
            type: 'POKEMON_TEAM_REMOVE',
            pokemonTeamRemove: i
        })
        axios.put('/pokemon/list/removeTeam', {
            email: cookies.email,
            pokemonTeams: pokemonTeams
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
            {pokemonTeams.id.find((pokemonTeam) => (
                pokemon.id === pokemonTeam - pokemon.ratio)) ? <div>{messageTeam}</div> : ''
            }

            {pokemonTeams.id.find((pokemons) => (
                pokemon.id === pokemons - pokemon.ratio
            )) !== undefined ? <form onSubmit={(e) => onClickRemovePokemonListTeam(pokemon.id + pokemon.ratio, e)}> <button name='pokemonTeams'>remove team</button></form> : <form onSubmit={(e) => onClickAddPokemonListTeam(pokemon.id + pokemon.ratio, e)}><button name='pokemonTeams'>add team</button></form>}
        </div>
    )
}

export default PokemonCapture