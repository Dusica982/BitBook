import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { Switch, Route, Redirect } from "react-router-dom";
import { Feed } from "../feed/Feed";
import MyProfile from "../MyProfile/MyProfile";
import PeoplePage from "../PeoplePage/PeoplePage";

class AfterLogIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <Header />
        <Switch>
          <Route exact path="/feed" component={Feed} />
          <Route exact path="/profile/:id?" component={MyProfile} />
          <Route exact path="/people" component={PeoplePage} />
          <Redirect path="/feed" />
        </Switch>
        <Footer />
      </>
    );
  }
}

export default AfterLogIn;
