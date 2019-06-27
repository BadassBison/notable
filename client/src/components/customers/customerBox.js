import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from 'actions';
import CustomerList from 'components/customers/customerList';
import requireAuth from 'components/auth/requireAuth';

class CustomerBox extends Component {
    state = { customer: '' }

    handleChange = (e) => {
        this.setState({ customer: e.target.value })
    }

    handleSubmit = (e) => {
        e.preventDefault();

        this.props.saveCustomer(this.state.customer);
        this.setState({ customer: '' });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h4>Add a Customer</h4>
                    <textarea onChange={this.handleChange} value={this.state.customer} />
                    <div>
                        <button>Submit Customer</button>
                    </div>
                </form>
                <button className="fetch-customers" onClick={this.props.fetchAllCustomers}>Fetch Customers</button>
                <CustomerList />
            </div>
        );
    }
}

export default connect(null, actions)(requireAuth(CustomerBox));