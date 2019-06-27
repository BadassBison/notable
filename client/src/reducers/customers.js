import { 
    FETCH_ALL_CUSTOMERS,
    FETCH_CUSTOMER,
    SAVE_CUSTOMER  
} from 'actions/types';

export default function(state = [], action) {
    switch (action.type) {
        case FETCH_ALL_CUSTOMERS:
            const customers = action.payload.data.map(customer => customer.name);
            return [...state, ...customers];
        case FETCH_CUSTOMER:
            const customer = action.payload;
            return [...state, customer];
        case SAVE_CUSTOMER:
            return [...state, action.payload];
        default: 
            return state; 
    }
}