import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import Main from './pages/LoginRegMain/LoginReg';
import afterLogIn from './pages/afterLogIn/afterLogIn'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }

  }
  render() {
    return (
      <>
        <Switch>
          <Route exact path="/" component={Main} />
          {/* <Route exact path="/feed" component={afterLogIn} /> */}

          <Redirect to="/" />
        </Switch>
      </>
    )
  }
}

export default App;





