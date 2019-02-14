import axios from 'axios';
import { SUBMIT_FEATURES, FETCH_FEATURES, CHANGE_AUTH } from './types';

export function submitFeatures(features) {
    return {
        type: SUBMIT_FEATURES,
        payload: features
    }
}

export function fetchComments() {
    
    const response = axios.get('http://jsonplaceholder.typicode.com/comments');
    return {
        type: FETCH_FEATURES,
        payload : response
    };
}

export function changeAuth(isLoggedIn) {
    return {
        type: CHANGE_AUTH,
        payload: isLoggedIn
    };
}