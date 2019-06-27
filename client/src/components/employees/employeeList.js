import React, { Component } from 'react';
import { connect } from 'react-redux';

class EmployeeList extends Component {
    renderEmployees() {
        return this.props.employees.map(employee => {
        
            return <li key={employee}>{employee}</li>;
        });
    }
    
    render() {
        return (
            <div>
                <ul>
                    <h4>Employee List</h4>
                    {this.renderEmployees()}
                </ul>
            </div>
        )
    }
}

function mapSTP(state) {
    return { employees: state.employees }
}

export default connect(mapSTP)(EmployeeList);