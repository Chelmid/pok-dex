import React, { useState } from 'react';
import logo from '../../logo.svg';
// on va se connecter au store pour lire le state
import { useDispatch, useSelector } from 'react-redux';

const Menu = () => {
    const [msg, setMsg] = useState('')

    const test = async () => {
        await fetch('/api/message').then((res) => res.json()).then(msg => setMsg(msg.msg))
    }
    const { apiPokemon, idPokemon, countPokemon, statusOnePokemon } = useSelector(state => state);
    const dispatch = useDispatch();
    return (

        <div onClick={e => dispatch({
            type: 'STATUS_ONE_POKEMON',
            status: true
        })}>
            <img src={logo} className="App-logo" alt="logo" />

            <button onClick={test}>test </button>
            <div>{msg}</div>
        </div>

    )
}
export default (Menu);