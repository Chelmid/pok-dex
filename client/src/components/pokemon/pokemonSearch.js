import React, { useState } from 'react';

import { Redirect } from "react-router-dom";
import { useHistory } from 'react-router-dom';
import Pokemon from './pokemon';

const PokemonSearch = () => {

    const [namePokemon, setNamePokemon] = useState('')
    const [id, setId] = useState('')
    const history = useHistory()
    const onSearch = (e) => {
        e.preventDefault()
        fetch('https://pokeapi.co/api/v2/pokemon/' + namePokemon).then(response =>  response.json()).then(data => {
            setId(data.id) 
        })
    }

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
            
           {id != '' && <Pokemon id={id}/>}
        </div>
    )

}

export default PokemonSearch