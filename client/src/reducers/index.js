import { combineReducers } from 'redux';
import authReducer from 'reducers/auth';
import employeesReducer from 'reducers/employees';
import customersReducer from 'reducers/customers';
import commentsReducer from 'reducers/comments';

export default combineReducers({
    auth: authReducer,
    employees: employeesReducer,
    customers: customersReducer,
    comments: commentsReducer
});