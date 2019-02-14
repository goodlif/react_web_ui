import  { combineReducers } from 'redux';
import featuresReducer from './features';
import authReducer from './auth'; 

export default combineReducers({
    features: featuresReducer,
    auth: authReducer
});