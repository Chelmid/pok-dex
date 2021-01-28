import React, { useEffect, useState } from 'react';

import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';

const Register = () => {

    // useState
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [pwd, setPwd] = useState('')
    const [message, setMessage] = useState('')
    const [msg, setMsg] = useState('')
    const [borderError, setBorderError] = useState('')

    //reducer dispatch et state
    const { seePassword } = useSelector(state => state.ConnectUserReducer);
    const dispatch = useDispatch()

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

        if (email.length >= 4 && name.length >= 5 && pwd.length >= 5) {
            axios.post('/register', {
                email: email,
                name: name,
                password: pwd
            }).then(res => setMsg(res.data.message)/*history.push('/login')*/)
            setMessage('')
        } else {
            if (name.length <= 5 || pwd.length <= 5) {
                setMessage('Veuillez remplir avec plus de 5 charateres')
                setBorderError('borderError')
            }
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
            <form onSubmit={handleSubmitRegister}>
                <h2 className='text-center' >Register</h2>
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

                    <label className='center'>
                        Your Name :
                        <div className='center'>
                            {name.length <= 4 && borderError ?
                                <input className={borderError} type="text" name="name" onChange={e => setName(e.target.value)} /> :
                                <input type="text" name="name" onChange={e => setName(e.target.value)} />
                            }
                        </div>
                    </label>
                    <div className='message-error'>{name.length <= 4 && message}</div>

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
                        <button type="submit">Register</button>
                    </div>
                </div>
            </form>
        </div>

    )
}
export default (Register);