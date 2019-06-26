import React from 'react';
import './homePage.css';
import { logInUserAuthentication } from '../../../services/usersService';

class LoginCard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: "",
            password: "",
            errorMsg: ""
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
            .then(response => {
                console.log(response);
                if (response.status < 200 || response.status >= 300) {
                    return (
                        this.setState({ errorMsg: "Error with a Fetch request, user already exist" })
                    )
                } else {
                    this.props.history.push('/feed')
                }
                return response.json()
            })
            .then((data) => {
                console.log(data);
                if (!data.accessToken) {
                    return
                }
                localStorage.setItem('loginToken', data.accessToken)
                return data;
            })
            //redirecting
            .catch(() => { this.props.history.push('/login') })
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