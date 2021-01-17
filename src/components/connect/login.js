import React from 'react';

const login = () => {
    
    const handleSubmitConnect = () => (
        console.log('click')
    )

    return (

        <div>
            <h2>Login</h2>

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
export default (login);