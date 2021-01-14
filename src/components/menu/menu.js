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
    const {displayOnePokemon} = useSelector(state => state.ReducerPokemonlist);
    const dispatch = useDispatch();

    const addPositionScroll = () => (
        dispatch({
            type: 'STATUS_ONE_POKEMON',
            display: true
        })
    )

    return (

        <div>
            <Link to={"/"} onClick={addPositionScroll}>
                <img src={'/pokeball.png'} className="App-logo" alt="logo" />
            </Link>
            {!displayOnePokemon && (<Link className='ml-4' to={"/"} onClick={addPositionScroll}>back</Link>)}
            {//<button onClick={test}>test </button>
            /*<div>{msg}</div>*/}

            <div></div>
        </div>

    )
}
export default (Menu);