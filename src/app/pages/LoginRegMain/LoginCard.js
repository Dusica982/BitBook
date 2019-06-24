import React from 'react';
import './LoginCard.css';

export const LoginCard = () => {
    return (
        <div className="containerRight">
            <form>
                <label for="email">Email</label>
                <input id="email" placeholder="Email Address" name="email" type="email" />

                <label for="pass">Password</label>
                <input id="pass" placeholder="Password" name="password" type="password" />

                <input className="login" type="submit" value="Login" />

            </form>
        </div>
    )
}

