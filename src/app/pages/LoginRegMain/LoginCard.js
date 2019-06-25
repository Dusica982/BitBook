import React from 'react';
import './homePage.css';
import { logInUserAuthentication } from '../../../services/usersService';

class LoginCard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: "",
            password: ""
        }
    }
    onChange = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        })
    }

    onSubmit = (event) => {
        event.preventDefault();

        const { email, password } = this.state;

        logInUserAuthentication(email, password)
            .then((data) => {
                localStorage.setItem('loginToken', data.accessToken)
                return data;
            })
        //redirecting
        this.props.history.push('/feed')
    };

    render() {
        return (
            <div className="login-card" >
                <form onSubmit={this.onSubmit}>
                    <label for="email">Email</label>
                    <input onChange={this.onChange} id="email" placeholder="Email Address" name="email" type="email" value={this.state.email} />

                    <label for="pass">Password</label>
                    <input onChange={this.onChange} id="pass" placeholder="Password" name="password" type="password" value={this.state.password} />

                    <input className="login" type="submit" value="Login" />

                </form>
            </div>
        )
    }
}

export default LoginCard;