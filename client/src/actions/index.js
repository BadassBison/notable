import axios from 'axios';

import { 
    CHANGE_AUTH,
    FETCH_ALL_EMPLOYEES,
    FETCH_EMPLOYEE,
    SAVE_EMPLOYEE,
    // UPDATE_EMPLOYEE,
    // DELETE_EMPLOYEE,
    FETCH_ALL_CUSTOMERS,
    FETCH_CUSTOMER,
    SAVE_CUSTOMER,
    // UPDATE_CUSTOMER,
    // DELETE_CUSTOMER,
    FETCH_ALL_COMMENTS,
    FETCH_COMMENT,
    SAVE_COMMENT, 
    // UPDATE_COMMENT,
    // DELETE_COMMENT,
} from 'actions/types';


// Auth actions _____________________________________________
export function changeAuth(isLoggedIn) {
    return {
        type: CHANGE_AUTH,
        payload: isLoggedIn
    };
}


// Employee actions _____________________________________________
export function fetchAllEmployees() {
    const employees = axios.get('api/employees')
    return {
        type: FETCH_ALL_EMPLOYEES,
        payload: employees
    };
};
export function fetchEmployee(id) {
    const employee = axios.get(`api/employees/${id}`);
    return {
        type: FETCH_EMPLOYEE,
        payload: employee
    };
};
export function saveEmployee(employee) {
    axios.post('api/employess', employee);
    return {
        type: SAVE_EMPLOYEE,
        payload: employee
    };
};


// Customer actions _____________________________________________
export function fetchAllCustomers() {
    const customers = axios.get('api/customers');
    return {
        type: FETCH_ALL_CUSTOMERS,
        payload: customers
    };
};
export function fetchCustomer(id) {
    const customer = axios.get(`api/customers/${id}`);
    return {
        type: FETCH_CUSTOMER,
        payload: customer
    };
};
export function saveCustomer(customer) {
    axios.post('api/customers', customer);
    return {
        type: SAVE_CUSTOMER,
        payload: customer
    };
};


// Comment actions _____________________________________________
export function fetchAllComments() {
    const comments = axios.get('api/comments');
    return {
        type: FETCH_ALL_COMMENTS,
        payload: comments
    };
};
export function fetchComment(id) {
    const comment = axios.get(`api/comments/${id}`);
    return {
        type: FETCH_COMMENT,
        payload: comment
    };
};
export function saveComment(comment) {
    return {
        type: SAVE_COMMENT,
        payload: comment
    };
};
// export function updateComment(comment) {
//     const comment = axios.get(`api/comments/${id}`);
//     return {
//         type: UPDATE_COMMENT,
//         payload: comment
//     };
// };
// export function deleteComment(commentId) {
//     const comment = axios.get(`api/comments/${commentId}`);
//     return {
//         type: DELETE_COMMENT
//     };
// };