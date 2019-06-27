import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Splash from 'components/splash';
import * as actions from 'actions';

class App extends Component {

    render() {
        return (
            <div>
                <Route exact path="/" component={Splash} />
                <Redirect to="/" /> 
            </div>
        )
    }
}

function mapSTP(state) {
    return { auth: state.auth };
}

export default connect(mapSTP, actions)(App);
