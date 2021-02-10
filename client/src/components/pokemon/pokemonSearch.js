import React, { useState } from 'react';

import { useHistory } from 'react-router-dom';
import Pokemon from './pokemon';

const PokemonSearch = () => {

    //useState
    const [namePokemon, setNamePokemon] = useState('')
    const [id, setId] = useState('')
    const [msg, setMsg] = useState('')

    // click recherche pokemon
    const onSearch = (e) => {
        e.preventDefault()
        fetch('https://pokeapi.co/api/v2/pokemon/' + namePokemon).then(response =>  response.json()).then(data => {
            setId(data.id)
            setMsg('')
        }).catch(error => setMsg('pokemon introuvable'))
    }

    //si n'est pas vide la value
    const onSearchValue = (e) => {
        if(e.target.value !== '' || e.target.value !== undefined){
            setNamePokemon(e.target.value.toLowerCase())
        }
    }

    return (
        <div>
            <form onSubmit={onSearch} className='barSearch'>
                <input name='pokemonName' onChange={onSearchValue} />
                <button>Search</button>
            </form>
            {msg.length > 0 && msg}
           {id != '' && msg.length == 0 && <Pokemon id={id}/>}
        </div>
    )

}

export default PokemonSearch