import React from 'react';
import { Link } from 'react-router-dom';
// import ListOfAuthorsInfo from '../../../entities/ListOfAuthorsInfo';

class Author extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            authors: []
        }
    }


    render() {
        return (
            <div>
                <p>{this.props.values.first + this.props.values.last}</p>
                <img src={this.props.values.img} alt="User" />
            </div >
        )
    }
}
export { Author };