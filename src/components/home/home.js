import React, { useState, useEffect } from 'react';
import { init, setPokemon, setStatusOnePokemon } from '../../reducer/autres/actions-type'
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
    useParams
} from "react-router-dom";

const Home = () => {

    const { apiPokemon, idPokemon, countPokemon, statusOnePokemon } = useSelector(state => state);
    const dispatch = useDispatch();

    const [pokemonList, setPokemonList] = useState([])

    let count = 0
    let ratio = 1
    console.log(apiPokemon)

    useEffect(() => {

        const test = fetch(apiPokemon)
            .then(res => res.json())
            .then(
                (data) => {
                    setPokemonList(data.results);
                    console.log(...data.results.keys())
                    init(...data.results.keys())
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {

                }
            )
    }, [])

    const handleClick = (e) => {
        dispatch({
            type: 'STATUS_ONE_POKEMON',
            statusOnePokemon: false
        })
    }
    console.log(statusOnePokemon)
    return (
        <div className='container'>
            <Router>
                <Link to={"/"}>
                    <Menu />
                </Link>
                <div className='text-center'>Ton pokedex</div>
                {statusOnePokemon && (
                    <ul className="d-flex flex-wrap">
                        {pokemonList.map(pokemon => (
                            <Link to={"/Pokemon/" + (count + ratio)} value={(count + ratio)} onClick={e => dispatch({
                                type: 'STATUS_ONE_POKEMON',
                                status: false
                            })}>
                                <PokemonList name={pokemon.name} count={count = count + ratio} />
                            </Link>
                        ))}
                    </ul>)}
                <Switch>
                    <Route path="/Pokemon/:id" component={Pokemon} />
                </Switch>
            </Router>
        </div>
    )
}

export default Home;