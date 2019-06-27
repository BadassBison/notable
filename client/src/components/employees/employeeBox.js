import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from 'actions';
import EmployeeList from 'components/employees/employeeList';
import requireAuth from 'components/auth/requireAuth';

class EmployeeBox extends Component {
    state = { employee: '' }

    renderButton() {
        if(this.props.auth) {
            return <button onClick={() => this.props.changeAuth(false)}>Sign Out</button>
        } else {
            return <button onClick={() => this.props.changeAuth(true)}>Sign In</button>
        }
    }

    handleChange = (e) => {
        this.setState({ employee: e.target.value })
    }

    handleSubmit = (e) => {
        e.preventDefault();

        this.props.saveEmployee(this.state.employee);
        this.setState({ employee: '' });
    }

    componentDidMount() {
        this.props.fetchAllEmployees();
    }

    render() {
        return (
            <div className="physBox">
                <h1>notable</h1>
                <EmployeeList />
                {this.renderButton()}
            </div>
        );
    }
}

export default connect(null, actions)(requireAuth(EmployeeBox));