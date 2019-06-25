import React from 'react';
import './homePage.css';
import { LoginCard } from './LoginCard';
import RegisterCard from './RegisterCard';
// import { Login as a } from 'react-router-dom';

class Main extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            formCard: true
        }

        this.changeFormLog = this.changeFormLog.bind(this);
        this.changeFormReg = this.changeFormReg.bind(this);
    }

    changeFormLog() {
        this.setState({ formCard: true });
    }

    changeFormReg() {
        this.setState({ formCard: false });
    }

    render() {
        return (
            <main className="container home">
                <div className="main-left">
                    <h1>BitBook Register</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam in exercitationem facilis non iste veritatis ab pariatur, necessitatibus quasi! Expedita sit sapiente veritatis ducimus reprehenderit. Ipsam obcaecati ipsa corporis excepturi?</p>
                </div>
                <div className="main-right">
                    <ul className="nav nav-tabs nav nav-tabs">
                        <li className="nav-item">
                            <a onClick={this.changeFormLog} className="nav-link" href="#">Login</a>
                        </li>
                        <li className="nav-item">
                            <a onClick={this.changeFormReg} className="nav-link" href="#">Register</a>
                        </li>
                    </ul>
                    {(this.state.formCard === true) ? <LoginCard history={this.props.history} /> : <RegisterCard />}
                </div>
            </main>
        )
    }
}

export default Main;
