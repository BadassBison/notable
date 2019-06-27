import React, { Component } from 'react';
import { connect } from 'react-redux';

class CustomerList extends Component {
    renderCustomers() {
        return this.props.customers.map(customer => {
        
            return <li key={customer}>{customer}</li>;
        });
    }
    
    render() {
        return (
            <div>
                <ul>
                    <h4>Patients</h4>
                    {this.renderCustomers()}
                </ul>
            </div>
        )
    }
}

function mapSTP(state) {
    return { customers: state.customers }
}

export default connect(mapSTP)(CustomerList);