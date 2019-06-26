import React from 'react';
import { Author } from './Author';
import { getAllUsersInfo } from '../../../services/usersService';
import './PeoplePage.css';



class PeoplePage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            authors: []
        }
    }

    componentDidMount() {
        getAllUsersInfo()
            .then(authors => {
                this.setState({ authors });
                console.log(this.state.authors);
            })

    }

    render() {
        return (
            <div className="oneUserMainBox">
                <input placeholder="Search" />
                {this.state.authors.map(element => {
                    return (
                        <Author values={element} />
                    )
                })}
            </div>
        )
    }
}

export default PeoplePage; 