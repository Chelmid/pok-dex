import React from 'react';
//import logo from '../../../public/pokeball.png';

// on va se connecter au store pour lire le state
import { useDispatch, useSelector } from 'react-redux';

import {
    Link,
} from "react-router-dom";

const Menu = () => {
    /*const [msg, setMsg] = useState('')

    const test = async () => {
        await fetch('/api/message').then((res) => res.json()).then(msg => setMsg(msg.msg))
    }*/

    // les states dans le ReducerPokemonlist
    const { displayList, pokedex } = useSelector(state => state.ReducerPokemonlist);
    const dispatch = useDispatch();

    const onclickSetOn = () => (
        dispatch({
            type: 'STATUS_ONE_POKEMON',
            display: true,
            pokedex: true
        })
    )

    const onclickSetOff = () => (
        dispatch({
            type: 'STATUS_ONE_POKEMON',
            display: false,
            pokedex: true
        })
      )

      const onclickSetPokedex = () => (
        dispatch({
            type: 'STATUS_ONE_POKEMON',
            display: true,
            pokedex: false
        })
      )

    return (

        <div className='d-flex'>
            <Link to={"/"} onClick={onclickSetOn}>
                <img src={'/pokeball.png'} className="App-logo" alt="logo" />
            </Link>
            {!displayList && (<Link className='ml-4' to={"/pokemon/list"} onClick={onclickSetPokedex }>back</Link>)}
            {//<button onClick={test}>test </button>
            /*<div>{msg}</div>*/}

            <div className="col text-right">
                <div className='d-flex justify-content-end'>
                    <Link to={"/pokemon/list"} >
                        <div className='mr-3'   onClick={onclickSetPokedex } >List</div>
                    </Link>
                    <Link to={"/register"} >
                        <div className='mr-3'onClick={onclickSetPokedex } >Register</div>
                    </Link>
                    <Link to={"/login"} >
                        <div className='mr-3' onClick={onclickSetPokedex }>Login</div>
                    </Link>
                </div>
            </div>
        </div>

    )
}
export default (Menu);