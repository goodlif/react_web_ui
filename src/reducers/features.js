import { SUBMIT_FEATURES, FETCH_FEATURES } from '../actions/types';

export default function(state = [], action) {
    switch(action.type){
        
        case SUBMIT_FEATURES: 
            return [...state, action.payload];
        case FETCH_FEATURES: 
            const comments = action.payload.data.map(comment => comment.name)
            return [...state, ...comments];
        default: 
            return state;
    }
}