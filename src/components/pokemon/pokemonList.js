import React, { useState, useEffect } from 'react';
// on va se connecter au store pour lire le state
import {
    Link,
} from "react-router-dom";
import debounce from "lodash.debounce";
import { useDispatch, useSelector } from 'react-redux';

const PokemonList = () => {

    // props qui vient de home
    const { apiPokemon, displayList, pokemonListContinue, total, pokemonListTotal } = useSelector(state => state.ReducerPokemonlist);
    const { connect, pokemonTeams, message } = useSelector(state => state.ConnectUserReducer);
    const [pokemonList, setPokemonList] = useState([])
    console.log(total)

    const onclickSet = () => (
        dispatch({
            type: 'STATUS_ONE_POKEMON',
            display: false
        })
    )
    //recupere url parametre
    const dispatch = useDispatch();
    let ratio = 1

    //construtor
    useEffect(() => {
        dispatch({
            type: 'STATUS_ONE_POKEMON',
            display: true,
            pokedex: false
        })
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

    //add pokemon in team
    const onClickAddPokemonList = (i) => {
        dispatch({
            type: 'POKEMON_TEAM_ADD',
            pokemonTeamAdd: i
        })
    }

    //remove pokemon in team
    const onClickRemovePokemonList = (i) => {
        dispatch({
            type: 'POKEMON_TEAM_REMOVE',
            pokemonTeamRemove: i
        })
        console.log('click')
    }

    return (
        <div>
            {connect &&
                <div className='text-center mt-3'><h2>Pokedex</h2>
                    <div className="d-flex flex-wrap ">
                        <div className="d-flex flex-wrap">
                            {pokemonList.map((pokemonList, i) => (
                                <div className='pokemon' key={i}>
                                    <Link to={"/Pokemon/" + (i + ratio)} value={i} onClick={onclickSet}>
                                        <li className="text-center"> <img src={'/pokeball.png'} className="App-logo-list" alt="logo" /> N° {(i + ratio)}</li>
                                        <div className="text-center">
                                            <img src={'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/' + (i + ratio) + '.png'} alt='img' />
                                        </div>
                                        <li className="text-center capitalize">{pokemonList.name}</li>
                                    </Link>

                                    {pokemonTeams.id.find((pokemonTeam) => (
                                        i === pokemonTeam - ratio)) ? <div>{message}</div> : ''
                                    }
                                    {pokemonTeams.id.find((pokemonTeam) => (
                                        i === pokemonTeam - ratio
                                    )) !== undefined ? <button onClick={() => onClickRemovePokemonList(i + ratio)}>enlever</button> : <button onClick={() => onClickAddPokemonList(i + ratio)}>ajouter</button>}
                                </div>
                            ))}
                        </div>
                        {pokemonListTotal.map((pokemonListNext, i) => (
                            i < 828 ?
                                <div className='pokemon' key={total + ratio + i}>
                                    <Link to={"/Pokemon/" + (total + ratio + i)} value={total + ratio + i} onClick={onclickSet}>
                                        <li className="text-center"> <img src={'/pokeball.png'} className="App-logo-list" alt="logo" /> N° {(total + ratio + i)}</li>
                                        <div className="text-center">
                                            <img src={'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/' + (total + ratio + i) + '.png'} alt='' />
                                        </div>
                                        <li className="text-center capitalize">{pokemonListNext.name}</li>
                                    </Link>
                                    <div>
                                        <button>ajouter</button>
                                    </div>
                                </div>
                                : ''
                        ))}
                        <button>ajouter</button>
                    </div>
                </div>
            }
        </div>
    )
}

export default PokemonList;