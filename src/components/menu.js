import React from 'react';
import logo from '../logo.svg';

const Menu = () => {
let msg = ''

    const test = async () => {
        const data =  await fetch('/api/message')
        console.log(data.json())
    }

    return (
        <div>
            <img src={logo} className="App-logo" alt="logo" />
            <button onClick={test}>test </button>
        </div>
    )
}

export default Menu;