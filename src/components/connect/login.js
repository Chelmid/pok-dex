import React, { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { useCookies } from 'react-cookie';
import { useHistory } from "react-router-dom";
import axios from 'axios';

const Login = () => {

    // useState
    const [email, setEmail] = useState('')
    const [pwd, setPwd] = useState('')
    const [message, setMessage] = useState('')
    const [msg, setMsg] = useState('')
    const [borderError, setBorderError] = useState('')
    const [, setCookie] = useCookies(['cookie-name']);

    //reducer dispatch et state
    const { seePassword } = useSelector(state => state.ConnectUserReducer);
    const dispatch = useDispatch()

    // hook redirection page
    const history = useHistory();

    useEffect(() => {
        dispatch({
            type: 'STATUS_ONE_POKEMON',
            display: true,
            pokedex: false
        })
    }, [dispatch])

    const handleSubmitConnect = (e) => {
        e.preventDefault()
        if (email.length >= 4 && pwd.length >= 5) {
            axios.post('/login', {
                email: email,
                password: pwd
            }).then(res => {
                console.log(res)
                /*history.push('/login')*/
                if( res.data.message === 'connecter' ){
                    console.log(res.data.message)
                    dispatch({
                        type: 'CONNECT',
                        connection: true
                    })
                    setCookie('connect',true)
                    setCookie('email',email)
                    history.push('/pokemon/list')
                }else{
                    console.log('error')
                    setMsg(res.data.message)
                }
            }).catch(error => setMsg('server erreur'))
            setMessage('')
        } else {
            if (pwd.length <= 5) {
                setMessage('Veuillez remplir avec plus de 5 charateres')
                setBorderError('borderError')
            }
        }
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
            <form onSubmit={handleSubmitConnect} className='col-4' style={{ margin: ' auto' }}>
                <h2 className='text-center' >Login</h2>
                <div className='text-center'>{msg}</div>
                <div style={{ display: ' grid' }}>

                    <label className='center'>
                        Your Email :
                        <div className='center'>
                            {email.length <= 4 && borderError ?
                                <input className={borderError} type="email" name="email" onChange={e => setEmail(e.target.value)} required /> :
                                <input type="email" name="email" onChange={e => setEmail(e.target.value)} required />
                            }
                        </div>
                    </label>
                    <div className='message-error'>{email.length <= 4 && message}</div>

                    <label className='center' style={{ paddingLeft: '20px' }}>
                        Your Password :
                        <div className='d-flex'>
                            {pwd.length <= 4 && borderError ?
                                <input type={seePassword} className={borderError} name="pwd" onChange={e => setPwd(e.target.value)} /> :
                                <input type={seePassword} name="pwd" onChange={e => setPwd(e.target.value)} />
                            }
                            <img src={'/master_ball.jpg'} className="App-logo-list cusor" alt="logo" onClick={seePwd} />
                        </div>
                    </label>
                    <div className='message-error'>{pwd.length <= 4 && message}</div>

                    <div style={{ margin: ' auto' }}>
                        <button type="submit">Connect</button>
                    </div>
                </div>
            </form>
        </div>

    )
}
export default (Login);