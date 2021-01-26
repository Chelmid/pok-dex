import React, { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

const Login = () => {

    // useState
    const [email, setEmail] = useState('')
    const [pwd, setPwd] = useState('')
    const [message, setMessage] = useState('')
    const [msg, setMsg] = useState('')

    //reducer dispatch et state
    const { seePassword } = useSelector(state => state.ConnectUserReducer);
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch({
            type: 'STATUS_ONE_POKEMON',
            display: true,
            pokedex: false
        })
    }, [dispatch])

    const handleSubmitConnect = () => (
        console.log('click')
    )

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
                <div className='col-md-6' style={{ margin: ' auto' }}>
                    <div>{email.length === 0 && message}</div>
                    <label>
                        Your Email :
                        <input type="email" name="email" className='col-auto' onChange={e => setEmail(e.target.value)} />
                    </label>
                    <label>
                        Your Password :
                        <div className='d-flex'>
                            <input type={seePassword} name="pwd" className='col-auto' onChange={e => setPwd(e.target.value)} />
                            <img src={'/master_ball.jpg'} className="App-logo-list cusor" alt="logo" onClick={seePwd} />
                        </div>
                    </label>
                    <div className='col-md-6' style={{ margin: ' auto' }}>
                        <button type="submit">Connect</button>
                    </div>
                </div>
            </form>
        </div>

    )
}
export default (Login);