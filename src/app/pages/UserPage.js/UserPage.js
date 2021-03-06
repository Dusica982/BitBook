import React from "react";
import { withRouter } from "react-router";
import "./MyProfile.css";
import { getUser } from "../../../services/usersService";

class UserPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: null
        };
    }

    componentDidMount() {
        if (this.props.match.params.id)
            getUser(this.props.match.params.id)
                .then(user => this.setState({ user }))
                .catch(error => console.log("Error"));
    }

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
                {this.state.user && <span>{this.state.user.posts.length} Posts</span>}
                {this.state.user && <span>{this.state.user.comments.length} Comments</span>}
            </div>
        );
    }
}

export default withRouter(UserPage);
