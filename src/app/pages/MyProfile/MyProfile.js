import React from "react";
import "./MyProfile.css";
import { getUsers } from "../../../services/usersService";

class MyProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null
    };
  }



  componentDidMount() {
    getUsers(localStorage.getItem("loginToken"))
      .then(user => this.setState({ user }))
      .catch(error => console.log("Error"));

  }

  render() {
    return (
      <div className="containerForMainPart">
        <img src="https://www.is.mpg.de/assets/noEmployeeImage_md-eaa7c21cc21b1943d77e51ab00a5ebe9.png" />
        <h3>{}</h3>

        <p>{}</p>

        <button type="button">Posts</button>
        <button type="button">Coments</button>


      </div>
    );
  }
}

export default MyProfile;
