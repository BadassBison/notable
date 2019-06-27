import React, { Component } from 'react';
import { connect } from 'react-redux';

export default (ChildComponent) => {
    class ComposedComponent extends Component {
        
        componentDidMount() {
            this.shouldNavigateAway();
        }
    
        componentDidUpdate() {
            this.shouldNavigateAway();
        }
    
        shouldNavigateAway() {
            if(!this.props.auth) {
                // this.props.history.push('/', this.state);
            }
        }
        
        render () {
            return <ChildComponent {...this.props} />;
        }
    };

    function mapSTP(state) {
        return { auth: state.auth };
    }

    return connect(mapSTP)(ComposedComponent);
};
