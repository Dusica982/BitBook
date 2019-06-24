import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { Switch, Route, Redirect } from 'react-router-dom';
import Feed from '';


class Feed extends React.Component {
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
                    <Route exact path="/" component={} />
                    <Route exact path="/" component={} />
                    <Route exact path="/feed" component={Feed} />

                    <Redirect to="/feed" />
                </Switch>

                <Footer />
            </>
        )
    }
}

export default Feed;






