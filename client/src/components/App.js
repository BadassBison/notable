import React, { Component } from 'react';
import { Route, Switch, Redirect, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Splash from 'components/splash';
import Employees from 'components/employees/employeeBox';
import Customers from 'components/customers/customerBox';
import Comments from 'components/comments/commentBox';
import * as actions from 'actions';

class App extends Component {

    renderButton() {
        if(this.props.auth) {
            return <button onClick={() => this.props.changeAuth(false)}>Sign Out</button>
        } else {
            return <button onClick={() => this.props.changeAuth(true)}>Sign In</button>
        }
    }

    renderHeader() {
        return(
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/employees'>Employees</Link>
                </li>
                <li>
                    <Link to='/customers'>Customers</Link>
                </li>
                <li>
                    <Link to='/comments'>Comments</Link>
                </li>
                <li>
                    {this.renderButton()}
                </li>
            </ul>
        )
    }

    render() {
        return (
            <div>
                {this.renderHeader()}
                <Switch>
                    <Route exact path="/" component={Splash} />
                    <Route path='/employees' component={Employees} />
                    <Route path='/customers' component={Customers} />
                    <Route path='/comments' component={Comments} />
                    <Redirect to="/" /> 
                </Switch>  
            </div>
        )
    }
}

function mapSTP(state) {
    return { auth: state.auth };
}

export default connect(mapSTP, actions)(App);
