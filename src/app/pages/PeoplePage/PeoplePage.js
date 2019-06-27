import React from 'react';
import { Author } from './Author';
import { getAllUsersInfo } from '../../../services/usersService';
import './PeoplePage.css';
import SearchButton from './SearchButton';


class PeoplePage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            authors: [],
            inputValue: "",
        }
    }

    componentDidMount() {
        getAllUsersInfo()
            .then(authors => {
                this.setState({ authors });
                console.log(this.props)
            })
        //  getUserId()
    }

    changesOnInput = (e) => {
        this.setState({ inputValue: e.target.value })
    };



    render() {
        console.log("a");
        console.log(this.authors)

        const filteredUser = this.state.authors.filter((user) => {
            return user.first.includes(this.state.inputValue) || user.last.includes(this.state.inputValue)
        })
        return (
            <div className="oneUserMainBox">
                <SearchButton changesOnInput={this.changesOnInput} value={this.state.inputValue} />
                {filteredUser.map(element => {
                    return (
                        <Author values={element} />
                    )
                })}
            </div>
        )
    }
}

export default PeoplePage;