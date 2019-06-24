import React from 'react';

export const LoginCard = () => {
    return (
        <div>
            <form>
                <label for="email">Email</label>
                <input id="email" placeholder="Email Address" name="email" type="email" />

                <label for="pass">Password</label>
                <input id="pass" placeholder="Password" name="password" type="password" />

                <input type="submit" value="Login" />

            </form>
        </div>
    )
}

