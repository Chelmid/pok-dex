import React, { useState, useEffect } from 'react';

// reducer autre facon
//import { init, setPokemon, setStatusOnePokemon } from '../../reducer/autres/actions-type'

// on va se connecter au store pour lire le state
import { useDispatch, useSelector } from 'react-redux';
import PokemonList from '../pokemon/pokemonList';
import Pokemon from '../pokemon/pokemon';
import Menu from '../menu/menu';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
} from "react-router-dom";

const Home = () => {

    //call des élements du initState dans le reducerListPokemon
    const { apiPokemon, displayOnePokemon } = useSelector(state => state.ReducerPokemonlist);
    const dispatch = useDispatch();

    //state tempo
    const [pokemonList, setPokemonList] = useState([])

    // le nombre de pokemon
    let ratio = 1

    console.log(apiPokemon)

    //construtor
    useEffect(() => {

       fetch(apiPokemon)
            .then(res => res.json())
            .then(
                (data) => {
                    setPokemonList(data.results);
                    console.log(data.results)
                    //insere donnes dans le inttstate
                    dispatch({
                        type: 'COUNTER_POKEMON',
                        counter: [...data.results.keys()]
                    })
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {

                }
            )
    }, [apiPokemon, dispatch])

    //console.log(window.innerHeight)


    const handleScroll = (e) => {
        let scrollPourcentage  = document.documentElement.scrollTop / (document.documentElement.scrollHeight - document.documentElement.clientHeight) * 100

        if(scrollPourcentage > 70 ){
            console.log('paf')
            dispatch({
                type: 'LIST_CONTINUE_POKEMON',
                continue: 10
            })
        }
    }

    
    window.addEventListener('scroll',handleScroll)

    return (
        <div className='container'>
            <Router>
                <Menu />
                {displayOnePokemon && (
                    <div className='text-center'><h2>Pokedex</h2>
                        <div className="d-flex flex-wrap">
                            {pokemonList.map((pokemon, i) => (
                                <Link to={"/Pokemon/" + (i + ratio)} value={i} key={i} onClick={e => dispatch({
                                    type: 'STATUS_ONE_POKEMON',
                                    display: false
                                })}>
                                    <PokemonList name={pokemon.name} count={i + ratio} />
                                </Link>
                            ))}
                            
                        </div></div>)}
                <Switch>
                    {!displayOnePokemon && (
                        <Route path="/Pokemon/:id" component={Pokemon} />
                    )}
                </Switch>
            </Router>
        </div>
    )
}

export default Home;