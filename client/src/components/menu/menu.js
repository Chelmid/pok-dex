import React, { useEffect } from 'react';
//import logo from '../../../public/pokeball.png';

// on va se connecter au store pour lire le state
import { useDispatch, useSelector } from 'react-redux';

import { Link } from "react-router-dom";

import { useCookies } from 'react-cookie';
import { useHistory } from "react-router-dom";

const Menu = () => {

    // les states dans le ReducerPokemonlist
    const { displayList } = useSelector(state => state.ReducerPokemonlist);
    const { connect } = useSelector(state => state.ConnectUserReducer)
    const dispatch = useDispatch();

    const [cookies, setCookie] = useCookies(['cookie-name']);

    // hook redirection page
    const history = useHistory();

    //useEffet
    useEffect(() => {
        if (cookies.connect === 'true') {
            dispatch({
                type: 'CONNECT',
                connection: true
            })
        } else {
            dispatch({
                type: 'CONNECT',
                connection: false
            })
        }
    }, [dispatch, cookies])

    //click home
    const onclickremoveOn = () => (
        dispatch({
            type: 'STATUS_ONE_POKEMON',
            display: true,
            pokedex: true
        })
    )

    //click list
    const onclickremovePokedex = () => (
        dispatch({
            type: 'STATUS_ONE_POKEMON',
            display: true,
            pokedex: false
        })
    )

    //click logout
    const onclickLogout = () => (
        setCookie('connect', false, { path: '/pokemon/list' }),
        setCookie('email', '', { path: '/pokemon/list' }),
        setCookie('connect', false, { path: '/' }),
        setCookie('email', '', { path: '/' }),
        dispatch({
            type: 'CONNECT',
            connection: false
        }),
        dispatch({
            type: 'STATUS_ONE_POKEMON',
            display: true,
            pokedex: true
        }),
        history.push('/')
    )

    return (

        <div className='d-flex'>
            <Link to={"/"} onClick={onclickremoveOn}>
                <img src={'/pokeball.png'} className="App-logo" alt="logo" />
            </Link>
            {!displayList && (<Link className='ml-4' to={"/pokemon/list"} onClick={onclickremovePokedex}>back</Link>)}

            <div className="col text-right">
                <div className='d-flex justify-content-end'>
                    {connect && <Link to={"/pokemon/list"} >
                        <div className='mr-3' onClick={onclickremovePokedex} >List</div>
                    </Link>}
                    {!connect && (<Link to={"/register"} >
                        <div className='mr-3' onClick={onclickremovePokedex} >Register</div>
                    </Link>)}
                    {!connect && (<Link to={"/login"} >
                        <div className='mr-3' onClick={onclickremovePokedex}>Login</div>
                    </Link>)}
                    {connect && (<Link to={"/"} >
                        <div className='mr-3' onClick={onclickLogout}>Logout</div>
                    </Link>)}
                </div>
            </div>
        </div>

    )
}
export default (Menu);