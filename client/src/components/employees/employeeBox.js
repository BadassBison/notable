import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from 'actions';
import EmployeeList from 'components/employees/employeeList';
import requireAuth from 'components/auth/requireAuth';

class EmployeeBox extends Component {
    state = { employee: '' }

    handleChange = (e) => {
        this.setState({ employee: e.target.value })
    }

    handleSubmit = (e) => {
        e.preventDefault();

        this.props.saveEmployee(this.state.employee);
        this.setState({ employee: '' });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h4>Add a Employee</h4>
                    <textarea onChange={this.handleChange} value={this.state.employee} />
                    <div>
                        <button>Submit Employee</button>
                    </div>
                </form>
                <button className="fetch-employees" onClick={this.props.fetchAllEmployees}>Fetch Employees</button>
                <EmployeeList />
            </div>
        );
    }
}

export default connect(null, actions)(requireAuth(EmployeeBox));