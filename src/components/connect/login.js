import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux';

const Login = () => {

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

    return (

        <div>
            <h2 className='text-center' >Login</h2>

            <form onSubmit={handleSubmitConnect}>
                <label>
                    Your Email:
                    <input type="text" name="email" />
                </label>
                <label>
                    Your Name:
                    <input type="text" name="name" />
                </label>

                <button type="submit">Connect</button>
            </form>
        </div>

    )
}
export default (Login);