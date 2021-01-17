import React from 'react';

const Register = () => {

    const handleSubmitRegister = () => (
        console.log('click')
    )

    return (

        <div>
            <h2>Register</h2>

            <form onSubmit={handleSubmitRegister}>
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
                <button type="submit">Register</button>
            </form>
        </div>

    )
}
export default (Register);