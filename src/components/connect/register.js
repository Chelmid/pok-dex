import React from 'react';

const Register = () => {

    const handleSubmit = () => (
        console.log('click')
    )

    return (

        <div>
            <h2>Register</h2>

            <form onSubmit={handleSubmit}>
                <label>
                    Your Email:
                    <input type="text" name="email" />
                </label>
                <label>
                    Your Name:
                    <input type="text" name="name" />
                </label>
                <label>
                    Your Name:
                    <input type="password" name="pwd" />
                </label>
                <button type="submit">Valider</button>
            </form>
        </div>

    )
}
export default (Register);