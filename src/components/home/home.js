import React, { useState, useEffect } from 'react';

// reducer autre facon
//import { init, setPokemon, setStatusOnePokemon } from '../../reducer/autres/actions-type'

// on va se connecter au store pour lire le state
import { useDispatch, useSelector } from 'react-redux';
import PokemonList from '../pokemon/pokemonList';
import Pokemon from '../pokemon/pokemon';
import Menu from '../menu/menu';

import Login from '../connect/login'
import Register from '../connect/register'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
} from "react-router-dom";

import debounce from "lodash.debounce";

const Home = () => {

    //call des élements du initState dans le reducerListPokemon
    const { apiPokemon, displayList, pokemonListContinue, total, pokemonListTotal } = useSelector(state => state.ReducerPokemonlist);
    const dispatch = useDispatch();

    //state tempo
    const [pokemonList, setPokemonList] = useState([])

    // le nombre de pokemon
    let ratio = 1

    console.log(apiPokemon)

    //construtor
    useEffect(() => {
        if (displayList === true) {
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
        }
    }, [apiPokemon, dispatch, displayList])

    // debounce scrolling infini

    window.onscroll = debounce(() => {
        let scrollPourcentage = document.documentElement.scrollTop / (document.documentElement.scrollHeight - document.documentElement.clientHeight) * 100
        if (scrollPourcentage > 50) {
            dispatch({
                type: 'LIST_CONTINUE_POKEMON',
                continue: 30
            })
        }
        fetch(pokemonListContinue)
            .then(res => res.json())
            .then(
                (data) => {
                    //console.log(data.results)
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
    }, 200);

    const onclickSet = () => (
        dispatch({
            type: 'STATUS_ONE_POKEMON',
            display: false
        })
    )

    return (
        <div className='container'>
            <Router>
                <Menu />

                {displayList && (
                    <div className='text-center mt-3'>{displayList && (<h2>Pokedex</h2>)}
                        <div className="d-flex flex-wrap">
                            {pokemonList.map((pokemonList, i) => (
                                <Link to={"/Pokemon/" + (i + ratio)} value={i} key={i} onClick={onclickSet}>
                                    <PokemonList name={pokemonList.name} count={i + ratio} />
                                </Link>
                            ))}
                            {pokemonListTotal.map((pokemonListNext, i) => (
                                i < 838 ?
                                    <Link to={"/Pokemon/" + (total + i + ratio)} value={total + i} key={total + i} onClick={onclickSet}>
                                        <PokemonList name={pokemonListNext.name} count={total + i + ratio} />
                                    </Link>
                                    : ''
                            ))}
                        </div></div>)}
                <Switch>
                    {!displayList && (
                        <Route path="/Pokemon/:id" component={Pokemon} />
                    )}
                        <Route path="/login" component={Login} />
                        <Route path="/register" component={Register} />
                </Switch>
            </Router>
        </div>
    )
}

export default Home;