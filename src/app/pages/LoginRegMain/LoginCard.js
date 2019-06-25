import React from 'react';
import './homePage.css';

export const LoginCard = (props) => {
    const onSubmit = (event) => {
        event.preventDefault();

        props.history.push('/');
    };

    return (
        <div className="login-card">
            <form onSubmit={onSubmit}>
                <label for="email">Email</label>
                <input id="email" placeholder="Email Address" name="email" type="email" />

                <label for="pass">Password</label>
                <input id="pass" placeholder="Password" name="password" type="password" />

                <input className="login" type="submit" value="Login" />

            </form>
        </div>
    )
}
