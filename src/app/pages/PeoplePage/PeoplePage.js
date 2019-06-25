import React from 'react';
import { Author } from './Author';
import { getAllUsersInfo } from '../../../services/usersService';


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
            <div>
                Search User By Name
                {this.state.authors.map(element => {
                    return (
                        <Author values={element} />
                    )
                })} />
            </div>
        )
    }
}

export default PeoplePage; 