import React from 'react';
import { useSelector } from 'react-redux';
import PokemonList from '../pokemon/pokemonList';
import Pokemon from '../pokemon/pokemon';
import Menu from '../menu/menu';

import Login from '../connect/login'
import Register from '../connect/register'

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PokemonSearch from '../pokemon/pokemonSearch';

const Home = () => {

    const { connect} = useSelector(state => state.ConnectUserReducer);

    //call des élements du initState dans le reducerListPokemon
    const { displayList, pokedex } = useSelector(state => state.ReducerPokemonlist);

    return (
        <div className='container'>
            <Router>
                <Menu />
                {displayList && connect && (
                        <PokemonSearch />
                )}
                {pokedex && (

                    <div className='pokedex' >
                        <img src={'/pokedex.gif'} style={{ width: '100%' }} alt='pokedex' />
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