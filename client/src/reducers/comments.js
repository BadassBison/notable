import { 
    FETCH_ALL_COMMENTS,
    FETCH_COMMENT,
    SAVE_COMMENT 
    // UPDATE_COMMENT 
} from 'actions/types';

export default function(state = [], action) {
    switch (action.type) {
        case FETCH_ALL_COMMENTS:
            const comments = action.payload.data.map(comment => comment.name);
            return [...state, ...comments];
        case FETCH_COMMENT:
            const comment = action.payload;
            return [...state, comment];
        case SAVE_COMMENT:
            return [...state, action.payload];
        default: 
            return state; 
    }
}