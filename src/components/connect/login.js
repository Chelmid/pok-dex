import React from 'react';

const login = () => {
    
    const handleSubmit = () => (
        console.log('click')
    )

    return (

        <div>
            <h2>Login</h2>

            <form onSubmit={handleSubmit}>
                <label>
                    Your Email:
                    <input type="text" name="email" />
                </label>
                <label>
                    Your Name:
                    <input type="text" name="name" />
                </label>
                
                <button type="submit">Valider</button>
            </form>
        </div>

    )
}
export default (login);