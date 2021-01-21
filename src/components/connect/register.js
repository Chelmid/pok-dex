import React, { useEffect, useState } from 'react';

import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';

const Register = () => {

    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [pwd, setPwd] = useState('')

    const { seePassword } = useSelector(state => state.ConnectUserReducer);

    const dispatch = useDispatch()
    //console.log(seePassword)
    useEffect(() => {
        dispatch({
            type: 'STATUS_ONE_POKEMON',
            display: true,
            pokedex: false
        })
    }, [dispatch])

    const handleSubmitRegister = (e) => (
        e.preventDefault(),

        axios({
            method: 'post',
            url: 'http://localhost:3000/register',
            data: {
                email: email,
                name: name,
                password: pwd
            }
        })
    )

    const seePwd = (e) => (
        seePassword === 'password' ?
            dispatch({
                type: 'SEE_PASSWORD',
                showPassword: 'text'
            })
            :
            dispatch({
                type: 'SEE_PASSWORD',
                showPassword: 'password'
            })
    )

    return (

        <div>

            <form onSubmit={handleSubmitRegister} className='col-4' style={{ margin: ' auto' }}>
                <h2 className='text-center' >Register</h2>
                <label>
                    Your Email :
                    <input type="text" name="email" onChange={e => setEmail(e.target.value)} />
                </label>
                <label>
                    Your Name :
                    <input type="text" name="name" onChange={e => setName(e.target.value)} />
                </label>
                <label>
                    Your Password :
                    <input type={seePassword} name="pwd" onChange={e => setPwd(e.target.value)} />
                    <img src={'/master_ball.jpg'} className="App-logo-list cusor" alt="logo" onClick={seePwd} />
                </label>
                <button type="submit">Register</button>
            </form>
        </div>

    )
}
export default (Register);