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
    const { displayList } = useSelector(state => state.ReducerPokemonlist);
    const dispatch = useDispatch();

    const onclickSetOn = () => (
        dispatch({
            type: 'STATUS_ONE_POKEMON',
            display: true
        })
    )

    const onclickSetOff = () => (
        dispatch({
            type: 'STATUS_ONE_POKEMON',
            display: false
        })
      )

    return (

        <div className='d-flex'>
            <Link to={"/"} onClick={onclickSetOn}>
                <img src={'/pokeball.png'} className="App-logo" alt="logo" />
            </Link>
            {!displayList && (<Link className='ml-4' to={"/"} onClick={onclickSetOn}>back</Link>)}
            {//<button onClick={test}>test </button>
            /*<div>{msg}</div>*/}

            <div className="col text-right">
                <div className='d-flex justify-content-end'>
                    <Link to={"/register"} >
                        <div className='mr-3'onClick={onclickSetOff} >Register</div>
                    </Link>
                    <Link to={"/login"} >
                        <div className='mr-3' onClick={onclickSetOff}>Login</div>
                    </Link>
                </div>
            </div>
        </div>

    )
}
export default (Menu);