import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import "./App.css";
import Main from "./pages/LoginRegMain/LoginReg";
import afterLogIn from "./pages/afterLogIn/afterLogIn";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Switch>
        <Route exact path="/login" component={Main} />
        <Route path="/" component={afterLogIn} />
        {/* <Redirect path="/login" component={Main} /> */}
      </Switch>
    );
  }
}

export default App;
