import React, { Component } from 'react';
import Physicians from 'components/employees/employeeBox';
import Patients from 'components/customers/customerBox';

export class Splash extends Component {
    render() {
        return (
            <div className='splash'>
                <Physicians />
                <Patients />
            </div>
        )
    }
}

export default Splash
