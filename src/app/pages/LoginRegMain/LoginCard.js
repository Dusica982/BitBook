import React from 'react';
import './homePage.css';
export const LoginCard = (props) => {
    return (
        <div className="login-card">
            <form onSubmit={(event) => {
                event.preventDefault();
                props.history.push('/');
            }}>
                <label for="email">Email</label>
                <input id="email" placeholder="Email Address" name="email" type="email" />

                <label for="pass">Password</label>
                <input id="pass" placeholder="Password" name="password" type="password" />

                <input className="login" type="button" value="Login" />

            </form>
        </div>
    )
}

