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

    componentDidMount() {
        this.props.fetchAllCustomers();
    }

    render() {
        return (
            <div className='patBox'>
                <CustomerList />
            </div>
        );
    }
}

export default connect(null, actions)(requireAuth(CustomerBox));