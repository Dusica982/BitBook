import React from "react";
import ReactDOM from "react-dom";
import "./PopUp.css";
// import { UploadImageForSingleUser } from "../../../services/usersService";

class PopUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: `${this.props.user.name.first} ${this.props.user.name.last}`,
      bio: this.props.user.about.bio,
      avatar: this.props.user.avatarUrl
    };
    this.imageInput = React.createRef();
  }

  handleClick() {
    this.setState(state => ({
      clicks: state.click
    }));
  }

  //   componentWillMount() {
  //     if (this.image !== this.image) {
  //       UploadImageForSingleUser(
  //         this.setState(image => ({
  //           image: image
  //         }))
  //       );
  //     }
  //   }

  onClickUploadPhoto = () => {
    this.imageInput.current.click();
  };

  handleUpdate = () => {
    const [first, ...rest] = this.state.name.split(" ");
    const last = rest.join(" ");

    this.props.onUpdate({
      name: {
        ...this.props.user.name,
        first,
        last
      },
      about: {
        ...this.props.user.about,
        bio: this.state.bio
      },
      avatarUrl: this.state.avatar
    });
  };

  updateName = event => {
    this.setState({
      name: event.target.value
    });
  };

  updateBio = event => {
    this.setState({
      bio: event.target.value
    });
  };

  updateAvatar = event => {
    const fileReader = new FileReader();

    fileReader.addEventListener("load", event => {
      this.setState({
        avatar: event.target.result
      });
    });

    fileReader.readAsDataURL(event.target.files[0]);
  };

  render() {
    return ReactDOM.createPortal(
      <div id="overlay">
        <div id="insideDiv">
          <h3 className="updateProfile">Update Profile</h3>

          <div className="imageAndButton">
            <img
              className="incognitoImage"
              src={this.state.avatar || "https://www.cyclonis.com/images/2018/05/incognito-browser-mode-765x417.jpg"}
              alt="Image"
              width="80px"
              height="80px"
            />

            <input
              type="file"
              name="avatar"
              style={{ display: "none" }}
              ref={this.imageInput}
              onChange={this.updateAvatar}
            />

            <button type="button" className="singleButton" onClick={this.onClickUploadPhoto}>
              UPLOAD PHOTO
            </button>
          </div>

          <div className="nameWrapper">
            <input
              type="text"
              placeholder="Full Name"
              className="inputPlaceName"
              value={this.state.name}
              onChange={this.updateName}
            />
          </div>

          <div className="userDescription">
            <input
              type="text"
              className="inputPlace"
              placeholder="User description and all text that describes user"
              value={this.state.bio}
              onChange={this.updateBio}
            />
          </div>

          <div className="closeAndUpdateButtons">
            <button type="button" className="popUpButtons btn btn-primary btn-sm" onClick={this.props.onClose}>
              CLOSE
            </button>
            <button type="button" className="popUpButtons btn btn-primary btn-sm" onClick={this.handleUpdate}>
              UPDATE
            </button>
          </div>
        </div>
      </div>,
      document.getElementById("profileModel")
    );
  }
}

export default PopUp;
