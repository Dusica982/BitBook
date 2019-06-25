import React from 'react';
import './homePage.css';
import { logInFetch } from '../../../services/usersService';

class LoginCard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: "",
            password: ""
        }
    }
    onSubmit = (event) => {
        event.preventDefault();

        const { email, password } = this.state;

        logInFetch(email, password)
            .then(response => {
                if (response.statusCode < 200 || response.statusCode >= 300) {
                    return (
                        this.setState({ errorMsg: "Error with a Fetch request, user already exist" })
                    )
                }



                console.log(response)
            })
        this.props.history.push('/feed');
    };

    render() {
        return (
            <div className="login-card" >
                <form onSubmit={this.onSubmit}>
                    <label for="email">Email</label>
                    <input id="email" placeholder="Email Address" name="email" type="email" />

                    <label for="pass">Password</label>
                    <input id="pass" placeholder="Password" name="password" type="password" />

                    <input className="login" type="submit" value="Login" />

                </form>
            </div>
        )
    }
}

export default LoginCard;