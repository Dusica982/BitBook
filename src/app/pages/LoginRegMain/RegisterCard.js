import React from 'react';


class RegisterCard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            email: "",
            password: "",
            errorMsg: ""
        }
        this.validation = this.validation.bind(this);
        this.onChange = this.onChange.bind(this);
        this.getData = this.getData.bind(this);
    }

    // getData() {
    //     const { name, email, password } = this.state;
    //     let apiData = {
    //         name: name,
    //         email: email,
    //         password: password
    //     }
    //     this.fetchUser(apiData);
    // }
    onChange(e) {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        })
        // console.log(name, value);
    }

    validation = (e) => {
        const { name, email, password } = this.state;

        if (name.length < 3) {
            e.preventDefault()
            return (
                this.setState({ errorMsg: "You need minimum 3 characters! Try again:)" })
            )
        }

        if (!email.includes("@")) {
            e.preventDefault()
            return (
                this.setState({ errorMsg: "You need monkey! Try again :)" })
            )
        }

        if (email.indexOf(".") < email.indexOf("@")) {
            e.preventDefault()
            return (
                this.setState({ errorMsg: "Email is not valid! Try again :)" })
            )
        }
        if (password.length < 6) {
            this.setState({ errorMsg: "You need min 6 characters! Try again :)" })
        }

        // this.getData();
    }

    render() {
        return (
            <div>
                <form>
                    <label for="name">Name</label>
                    <input onChange={this.onChange} id="name" placeholder="FullName" name="name" type="text" value={this.state.name} />

                    <label for="email">Email</label>
                    <input onChange={this.onChange} id="email" placeholder="Email Address" name="email" type="email" value={this.state.email} />

                    <label for="pass">Password</label>
                    <input onChange={this.onChange} id="pass" placeholder="Min 6 characters" name="password" type="password" value={this.state.password} />

                    <input onClick={this.validation} type="submit" value="Register" />
                </form>
                <p>{this.state.errorMsg}</p>
            </div >
        )
    }
}

export default RegisterCard;