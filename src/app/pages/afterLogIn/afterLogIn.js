import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { Switch, Route, Redirect } from 'react-router-dom';
import Feed from '../feed/Feed';

class AfterLogIn extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }

    }
    render() {
        return (
            <>
                <Header />
                <Switch>
                    <Route exact path="/postFeed" component={Feed} />

                    <Redirect to="/postFeed" />
                </Switch>
                <Footer />
            </>
        )
    }
}

export default AfterLogIn;






