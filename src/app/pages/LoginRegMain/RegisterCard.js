import React from 'react';

export const RegisterCard = () => {
    return (
        <div>
            <form>
                <label for="name">Name</label>
                <input id="name" placeholder="FullName" name="name" type="text" />

                <label for="email">Email</label>
                <input id="email" placeholder="Email Address" name="email" type="email" />

                <label for="pass">Password</label>
                <input id="pass" placeholder="Min 6 characters" name="password" type="password" />

                <input type="submit" value="Register" />
            </form>
        </div>
    )
}