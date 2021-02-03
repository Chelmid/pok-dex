import React, { useState, useEffect } from 'react';
// on va se connecter au store pour lire le state
import { Link } from "react-router-dom";
import debounce from "lodash.debounce";
import { useDispatch, useSelector } from 'react-redux';
import { useCookies } from 'react-cookie';
import axios from 'axios';
import { useHistory } from "react-router-dom";

import PokemonCapture from './pokemonCapture'
import PokemonTeam from './pokemonTeam'

const PokemonList = () => {

    // props qui vient de home
    const { apiPokemon, displayList, pokemonListContinue, total, pokemonListTotal } = useSelector(state => state.ReducerPokemonlist);
    const { connect} = useSelector(state => state.ConnectUserReducer);
    const [pokemonList, setPokemonList] = useState([])
    const [cookies, removeCookie] = useCookies(['cookie-name']);
    const [msg, setMsg] = useState('')
    const history = useHistory();


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
        console.log(cookies.email)
        if (cookies.email !== undefined) {
            axios.post('/pokemon/list', { email: cookies.email }).then((response) => (
            console.log(response),
            dispatch({
                type: 'ONLOAD_POKEMON_TEAMS',
                pokemonTeamOnload: response.data.idTeam
            }),
            dispatch({
                type: 'ONLOAD_POKEMON_CAPTURE',
                pokemonCaptureOnload: response.data.idCapture
            }))
            ).catch(error => {
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
    }, [apiPokemon, dispatch, displayList,cookies.email,history,removeCookie])

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

    return (
        <div>
            {connect &&
                <div className='text-center mt-3'><h2>Pokedex</h2>
                    <div className="d-flex flex-wrap ">
                        <div>{msg}</div>
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
                                    
                                    <PokemonCapture id={(i)} ratio={(ratio)}/>
                                    <PokemonTeam id={(i)} ratio={(ratio)}/>
                                    
                                </div>
                            ))}

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

                                        <PokemonCapture id={(total + i)} ratio={(ratio)}/>
                                        <PokemonTeam id={(total + i)} ratio={(ratio)}/>

                                        {/*pokemonTeams.id.find((pokemonTeam) => (
                                            i === pokemonTeam - ratio
                                        )) !== undefined ? <form onSubmit={(e) => onClickRemovePokemonList(i + ratio, e)}> <button className={'btnEnlever'} name='pokemonTeams' ></button><div>capturer</div></form> : <form onSubmit={(e) => onClickAddPokemonList(i + ratio, e)}><button className={'btnAjouter'} name='pokemonTeams'></button></form>*/}
                                    </div>
                                    : ''
                            ))}
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default PokemonList;