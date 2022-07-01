import { combineReducers } from 'redux';
import auth from './authReducer';
import token from './tokenReducer';
import animal from './animalReducer';

const rootReducer = combineReducers({
    auth,
    token,
    animal
});

export default rootReducer;