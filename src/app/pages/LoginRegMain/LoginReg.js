import React from 'react';
import './LoginReg.css';
import { LoginCard } from './LoginCard';
import RegisterCard from './RegisterCard';
// import { Login as a } from 'react-router-dom';

class Main extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            formCard: true
        }
        this.changeForm = this.changeForm.bind(this);
    }
    changeForm() {
        if (this.state.formCard === true) {
            this.setState({ formCard: false });
        } else {
            this.setState({ formCard: true });
        }
    }

    render() {
        return (
            <main className="containerLeft">
                <div>
                    <h1>BitBook Register</h1>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam in exercitationem facilis non iste veritatis ab pariatur, necessitatibus quasi! Expedita sit sapiente veritatis ducimus reprehenderit. Ipsam obcaecati ipsa corporis excepturi?
                    <p>Lorem</p>
                </div>
<<<<<<< HEAD

                <ul className="container Right nav nav-tabs">
=======
                <ul className="nav nav-tabs">
>>>>>>> 7865ed20d8b4e60b26693fdecc573cafcba2e587
                    <li className="nav-item">
                        <a onClick={this.changeForm} className="nav-link active" href="#">Login</a>
                    </li>
                    <li className="nav-item">
                        <a onClick={this.changeForm} className="nav-link" href="#">Register</a>
                    </li>
                </ul>

                {(this.state.formCard === true) ? <LoginCard /> : <RegisterCard />}
            </main>
        )
    }
}

export default Main;
