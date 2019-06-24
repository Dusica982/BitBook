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

<<<<<<< HEAD
                <input className="login" type="submit" value="Login" />
                <p>Error msg</p>
=======
                <input type="submit" value="Login" />

>>>>>>> 7865ed20d8b4e60b26693fdecc573cafcba2e587
            </form>
        </div>
    )
}

