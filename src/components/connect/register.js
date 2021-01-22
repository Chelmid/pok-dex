import React, { useEffect, useState } from 'react';

import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';

const Register = () => {

    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [pwd, setPwd] = useState('')

    const [message, setMessage] = useState('')

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

    const [msg, setMsg] = useState('')

    /*const test = async () => {
        await fetch('/register').then((res) => res.json()).then(msg => setMsg(msg.msg))
    }*/
    
    console.log(msg)
    
    const handleSubmitRegister = async (e) => {
        e.preventDefault()
        if(email === '' || name === '' || pwd === ''){
            setMessage('Veuillez rempli le champs')
        }else{
            axios({
                method: 'post',
                url: 'http://localhost:3000/register',
                data: {
                    email: email,
                    name: name,
                    password: pwd
                }
            })

            await fetch('/register').then((res) => console.log(res.json()))
        }
    }
        /*e.preventDefault(),
        email === '' || name === '' || pwd === '' ?
        setMessage('Veuillez rempli le champs')
        :
        axios({
            method: 'post',
            url: 'http://localhost:3000/register',
            data: {
                email: email,
                name: name,
                password: pwd
            }
        })
    )*/

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


            <div>{msg}</div>

            <form onSubmit={handleSubmitRegister} className='col-4' style={{ margin: ' auto' }}>
                <h2 className='text-center' >Register</h2>
                <label>
                    Your Email :
                    <div>{email.length === 0 && message}</div>
                    <input type="text" name="email" onChange={e => setEmail(e.target.value)} />
                </label>
                <label>
                    Your Name :
                    <div>{name.length === 0 && message}</div>
                    <input type="text" name="name" onChange={e => setName(e.target.value)} />
                </label>
                <label>
                    Your Password :
                    <div>{pwd.length === 0 && message}</div>
                    <input type={seePassword} name="pwd" onChange={e => setPwd(e.target.value)} />
                    <img src={'/master_ball.jpg'} className="App-logo-list cusor" alt="logo" onClick={seePwd} />
                </label>
                <div>
                    <button type="submit">Register</button>
                </div>
            </form>
        </div>

    )
}
export default (Register);