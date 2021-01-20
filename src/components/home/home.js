import React from 'react';

// reducer autre facon
//import { init, setPokemon, setStatusOnePokemon } from '../../reducer/autres/actions-type'

// on va se connecter au store pour lire le state
import { useSelector } from 'react-redux';
import PokemonList from '../pokemon/pokemonList';
import Pokemon from '../pokemon/pokemon';
import Menu from '../menu/menu';

import Login from '../connect/login'
import Register from '../connect/register'

import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

const Home = () => {

    //call des élements du initState dans le reducerListPokemon
    const { displayList, pokedex } = useSelector(state => state.ReducerPokemonlist);

    return (
        <div className='container'>
            <Router>
                <Menu />

                {pokedex && (
                    
                    <div className='pokedex' >
                        <img src={'/pokedex.gif'} style={{width : '100%'}} alt='pokedex' />
                    </div>
                    )}
                <Switch>
                    {!displayList && (
                        <Route path="/Pokemon/:id" component={Pokemon} />
                    )}
                    <Route path="/Pokemon/list" component={PokemonList} />
                    <Route path="/login" component={Login} />
                    <Route path="/register" component={Register} />
                </Switch>
            </Router>
        </div>
    )
}

export default Home;