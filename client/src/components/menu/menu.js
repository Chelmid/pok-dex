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

    const [cookies, removeCookie] = useCookies(['cookie-name']);

    // hook redirection page
    const history = useHistory();

    //useEffet
    useEffect(() => {
        if(cookies.connect === 'true'){
            dispatch({
                type: 'CONNECT',
                connection: true
            })
        }else{
            dispatch({
                type: 'CONNECT',
                connection: false
            })
        }
    }, [dispatch, cookies.connect])

    //click home
    const onclickSetOn = () => (
        dispatch({
            type: 'STATUS_ONE_POKEMON',
            display: true,
            pokedex: true
        })
    )

    //click list
    const onclickSetPokedex = () => (
        dispatch({
            type: 'STATUS_ONE_POKEMON',
            display: true,
            pokedex: false
        })
    )

    //click logout
    const onclickLogout = () => (
        removeCookie('connect'),
        removeCookie('email'),
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
            <Link to={"/"} onClick={onclickSetOn}>
                <img src={'/pokeball.png'} className="App-logo" alt="logo" />
            </Link>
            {!displayList && (<Link className='ml-4' to={"/pokemon/list"} onClick={onclickSetPokedex}>back</Link>)}

            <div className="col text-right">
                <div className='d-flex justify-content-end'>
                    {connect && <Link to={"/pokemon/list"} >
                        <div className='mr-3' onClick={onclickSetPokedex} >List</div>
                    </Link>}
                    {!connect && (<Link to={"/register"} >
                        <div className='mr-3' onClick={onclickSetPokedex} >Register</div>
                    </Link>)}
                    {!connect && (<Link to={"/login"} >
                        <div className='mr-3' onClick={onclickSetPokedex}>Login</div>
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