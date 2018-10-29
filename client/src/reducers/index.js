import { combineReducers } from 'redux';
import authReducer from './authReducer';
import errorReducer from './errorReducer';
import profileReducer from './ProfileReducer';
import postReducer from './PostReducer';
import developerReducer from './DeveloperReducer';

export default combineReducers({
	auth: authReducer,
	errors: errorReducer,
	profile: profileReducer,
	posts: postReducer,
	developers: developerReducer
});