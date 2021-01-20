import React, { useState } from 'react';

import axios from 'axios';

const Register = () => {

    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [pwd, setPwd] = useState('')

    const handleSubmitRegister = (e) => (
        e.preventDefault(),
        console.log(email),
        console.log(pwd),
        axios({
            method: 'post',
            url: 'http://localhost:3000/register',
            data: {
                email : email,
                name : name,
                password : pwd
            }
        })
    )

    const seePwd = () => (
        console.log('click')
    )

    return (

        <div>
            <h2 className='text-center' >Register</h2>

            <form onSubmit={handleSubmitRegister}>
                <label>
                    Your Email:
                    <input type="text" name="email" onChange={e => setEmail(e.target.value) }/>
                </label>
                <label>
                    Your Name:
                    <input type="text" name="name" onChange={e => setName(e.target.value) } />
                </label>
                <label>
                    Your Password:
                    <input type="password" name="pwd" onChange={e => setPwd(e.target.value) }/>
                    <img src={'/master_ball.jpg'} className="App-logo-list cusor" alt="logo" onClick={seePwd}/>
                </label>
                <button type="submit">Register</button>
            </form>
        </div>

    )
}
export default (Register);