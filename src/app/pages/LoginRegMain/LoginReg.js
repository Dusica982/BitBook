import React from 'react';
import './LoginReg.css';
// import { Login as a } from 'react-router-dom';

class Main extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render() {
        return (
            <main>
                <div>
                    <h1>BitBook Register</h1>
                    <p>Lorem</p>
                </div>
                <div>
                    <ul class="nav nav-tabs">
                        <li class="nav-item">
                            <a className="nav-link active" href="#">Login</a>
                        </li>
                        <li class="nav-item">
                            <a className="nav-link" href="#">Register</a>
                        </li>
                    </ul>
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
            </main>
        )
    }
}

export default Main;
