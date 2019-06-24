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
    getUsers(localStorage.getItem("me"))
      .then(user => this.setState({ user }))
      .catch(error => console.log("Error"));
  }

  render() {
    return (
      <div className="containerForMainPart">
        <img src="https://www.is.mpg.de/assets/noEmployeeImage_md-eaa7c21cc21b1943d77e51ab00a5ebe9.png" />
        <h3>Pera Peric</h3>

        <p>Pera Peric was born...</p>

        <button />
        <button />
      </div>
    );
  }
}

export default MyProfile;
