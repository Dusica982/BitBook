import React from 'react';
import RegisterUser from '../../../services/usersService';
import { User } from '../../../entities/User';
import './homePage.css';
import { access } from 'fs';
class RegisterCard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            email: "",
            password: "",
            errorMsg: ""
        }
        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
        this.getData = this.getData.bind(this);
    }

    getData() {
        const { name, email, password } = this.state;
        const userObj = { name, email, password };
        RegisterUser(userObj)
            .then(response => {
                if (response.statusCode < 200 || response.statusCode >= 300) {
                    return (
                        this.setState({ errorMsg: "Error with a Fetch request, user is already registered" })
                    )
                }
            })
    }

    onChange(e) {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        })
    }

    onFormSubmit(e) {
        e.preventDefault()
        const { name, email, password } = this.state;

        this.setState({ errorMsg: "" })

        if (name.length < 3) {
            return (
                this.setState({ errorMsg: "You need minimum 3 characters! Try again:)" })
            )
        }

        if (!email.includes("@")) {
            return (
                this.setState({ errorMsg: "You need monkey! Try again :)" })
            )
        }

        if (email.indexOf(".") < email.indexOf("@")) {
            return (
                this.setState({ errorMsg: "Email is not valid! Try again :)" })
            )
        }
        if (password.length < 6) {
            this.setState({ errorMsg: "You need min 6 characters! Try again :)" })
        }

        this.getData();
    }

    render() {
        return (
            <div className="register-card">
                <form onSubmit={this.onFormSubmit}>
                    <label for="name">Name</label>
                    <input onChange={this.onChange} id="name" placeholder="FullName" name="name" type="text" value={this.state.name} />

                    <label for="email">Email</label>
                    <input onChange={this.onChange} id="email" placeholder="Email Address" name="email" type="email" value={this.state.email} />

                    <label for="pass">Password</label>
                    <input onChange={this.onChange} id="pass" placeholder="Min 6 characters" name="password" type="password" value={this.state.password} />

                    <input type="submit" value="Register" />
                </form>
                <p>{this.state.errorMsg}</p>
            </div >
        )
    }
}

export default RegisterCard;