import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from 'actions';

class EmployeeList extends Component {
    

    renderEmployees() {
        return this.props.employees.map(employee => {
        
            return <li className="physician" onClick={this.props.fetchPatients} key={employee}>{employee}</li>;
        });
    }

    handleClick = (e) => {
        
    }
    
    
    render() {
        return (
            <div>
                <h4>Physicians</h4>
                <ul>
                    {this.renderEmployees()}
                </ul>
            </div>
        )
    }
}

function mapSTP(state) {
    return { employees: state.employees }
}

export default connect(mapSTP, actions)(EmployeeList);