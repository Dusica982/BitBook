import React from "react";
import { withRouter } from "react-router";
import "./MyProfile.css";
import { getUser } from "../../../services/usersService";
import UserConstructor from "../../../entities/UserConstructor";
import jwt_decode from "jwt-decode";
import PopUp from "./PopUp";

class MyProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      click: false
    };
  }

  componentDidMount() {
    if (this.props.match.params.id || this.decoded)
      getUser(this.props.match.params.id)
        // getUser(this.props.match.params.id)
        .then(user => this.setState({ user }))
        .catch(error => console.log("Error"));
    else {
      let token = localStorage.getItem("loginToken");
      let decoded = jwt_decode(token);
      getUser(decoded.id)
        .then(user => this.setState({ user }))
        .catch(error => console.log("Error"));
    }
  }

  handleClick = () => {
    this.setState({
      click: true
    });
  };

  closePopup = () => {
    this.setState({
      click: false
    });
  };

  updateUser = newUser => {
    this.setState(state => ({
      user: {
        ...state.user,
        ...newUser
      },
      click: false
    }));
  };

  render() {
    return (
      <div className="containerForMainPart">
        <img
          src={
            (this.state.user && this.state.user.avatarUrl) ||
            "https://www.is.mpg.de/assets/noEmployeeImage_md-eaa7c21cc21b1943d77e51ab00a5ebe9.png"
          }
        />
        <h3>{this.state.user && `${this.state.user.name.first} ${this.state.user.name.last}`}</h3>
        <p>{this.state.user && this.state.user.about.bio}</p>
        {this.state.user && <span className="spanButton">{this.state.user.posts.length} Posts</span>}
        {this.state.user && <span className="spanButton">{this.state.user.comments.length} Comments</span>}
        {!this.props.match.params.id && (
          <button className="popUp" onClick={this.handleClick}>
            {" "}
            Update Button
          </button>
        )}
        {this.state.click && <PopUp user={this.state.user} onClose={this.closePopup} onUpdate={this.updateUser} />}
      </div>
    );
  }
}

export default withRouter(MyProfile);
