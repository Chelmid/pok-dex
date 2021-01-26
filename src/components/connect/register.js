import React, { useEffect, useState } from 'react';

import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";

const Register = () => {

    // useState
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [pwd, setPwd] = useState('')
    const [message, setMessage] = useState('')
    const [msg, setMsg] = useState('')

    //reducer dispatch et state
    const { seePassword } = useSelector(state => state.ConnectUserReducer);
    const dispatch = useDispatch()

    // hook redirection page
    const history = useHistory();

    //useEffet
    useEffect(() => {
        dispatch({
            type: 'STATUS_ONE_POKEMON',
            display: true,
            pokedex: false
        })
    }, [dispatch])

    /*const test = async () => {
        await fetch('/register').then((res) => res.json()).then(msg => setMsg(msg.msg))
    }*/

    const handleSubmitRegister = (e) => {

        e.preventDefault()
        //controle des champs no empty
        if (email === '' || name === '' || pwd === '') {
            setMessage('Veuillez rempli le champs')
        } else {
            axios.post('/register', {
                email: email,
                name: name,
                password: pwd
            }).then(res => setMsg(res.data.message)/*history.push('/login')*/)
        }

        ///fetch('/register').then((res) => console.log(res))
    }

    // hook voir le password
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
            <form onSubmit={handleSubmitRegister} className='col-md-4' style={{ margin: ' auto' }}>
                <h2 className='text-center' >Register</h2>
                <div className='text-center'>{msg}</div>
                <div className='col-md-6' style={{ margin: ' auto' }}>
                    <div>{email.length === 0 && message}</div>
                    <label>
                        Your Email :
                    <input type="email" name="email" className='col-auto' onChange={e => setEmail(e.target.value)} required/>
                    </label>
                    <div>{name.length === 0 && message}</div>
                    <label>
                        Your Name :
                    <input type="text" name="name" className='col-auto' onChange={e => setName(e.target.value)} />
                    </label>
                    <div>{pwd.length === 0 && message}</div>
                    <label>
                        Your Password :
                        <div className='d-flex'>
                            <input type={seePassword} name="pwd" className='col-auto' onChange={e => setPwd(e.target.value)} />
                            <img src={'/master_ball.jpg'} className="App-logo-list cusor" alt="logo" onClick={seePwd} />
                        </div>
                    </label>

                    <div className='col-md-6' style={{ margin: ' auto' }}>
                        <button type="submit">Register</button>
                    </div>
                </div>
            </form>
        </div>

    )
}
export default (Register);