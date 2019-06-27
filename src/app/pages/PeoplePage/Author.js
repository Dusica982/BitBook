import React from "react";
import { Link } from "react-router-dom";
// import ListOfAuthorsInfo from '../../../entities/ListOfAuthorsInfo';
import "./PeoplePage.css";

class Author extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      authors: []
    };
  }

  render() {
    return (
      <Link to={`/profile/${this.props.values.id}`}>
        <div className="userBox">
          <img className="img" src={this.props.values.img} alt="User" />
          <span className="span">
            <p className="p">
              <b>
                {this.props.values.first} {this.props.values.last}
              </b>
            </p>
            <p>{this.props.values.description}</p>
            {/* <p className="dateOfCreation">{this.props.values.dateOfCreation}</p> */}
          </span>
        </div>
      </Link>
    );
  }
}
export { Author };
