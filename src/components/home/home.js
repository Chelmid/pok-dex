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

import debounce from "lodash.debounce";

const Home = () => {

    //call des élements du initState dans le reducerListPokemon
    const { apiPokemon, displayOnePokemon, pokemonListContinue, total, pokemonListTotal } = useSelector(state => state.ReducerPokemonlist);
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
    
    // debounce scrolling infini
    
    window.onscroll = debounce(() => {
        let scrollPourcentage  = document.documentElement.scrollTop / (document.documentElement.scrollHeight - document.documentElement.clientHeight) * 100
        if(scrollPourcentage > 50 ){
            dispatch({
                type: 'LIST_CONTINUE_POKEMON',
                continue: 40
            })
        }
        fetch(pokemonListContinue)
            .then(res => res.json())
            .then(
                (data) => {
                    console.log(data.results)
                    dispatch({
                        type: 'LIST_TOTAL_POKEMON',
                        nextList: data.results,
                    })
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {

                }
            )
      }, 500);

    return (
        <div className='container'>
            <Router>
                <Menu />
                {displayOnePokemon && (
                    <div className='text-center'><h2>Pokedex</h2>
                        <div className="d-flex flex-wrap">
                            {pokemonList.map((pokemonList, i) => (
                                <Link to={"/Pokemon/" + (i + ratio)} value={i} key={i} onClick={e => dispatch({
                                    type: 'STATUS_ONE_POKEMON',
                                    display: false
                                })}>
                                    <PokemonList name={pokemonList.name} count={i + ratio} />
                                </Link>
                            ))}
                            {pokemonListTotal.map((pokemonListNext, i) => (
                                i < 838 ?
                                <Link to={"/Pokemon/" + (total + i + ratio)} value={total + i} key={total + i} onClick={e => dispatch({
                                    type: 'STATUS_ONE_POKEMON',
                                    display: false
                                })}>
                                    <PokemonList name={pokemonListNext.name} count={total + i + ratio} />
                                </Link>
                                : ''
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