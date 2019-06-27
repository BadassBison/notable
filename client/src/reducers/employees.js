import { 
    FETCH_ALL_EMPLOYEES,
    FETCH_EMPLOYEE,
    SAVE_EMPLOYEE  
} from 'actions/types';

export default function(state = [], action) {
    switch (action.type) {
        case FETCH_ALL_EMPLOYEES:
            const employees = action.payload.data.map(employee => employee.name);
            return [...state, ...employees];
        case FETCH_EMPLOYEE:
            const employee = action.payload;
            return [...state, employee];
        case SAVE_EMPLOYEE:
            return [...state, action.payload];
        default: 
            return state; 
    }
}