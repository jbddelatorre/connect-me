import { 
	FETCH_USER_LOGIN_SUCCESS,
	FETCH_USER_LOGIN_REQUEST, 
	FETCH_USER_LOGIN_ERROR,
	LOGOUT_SUCCESS 
} from '../actions/types';


import isEmpty from '../validation/is-empty';
import { combineReducers } from 'redux'

// const initialState = {
// 	isAuthenticated: false,
// 	user: {},
// }

const user = (state = {}, action) => {
	switch(action.type) {
		case FETCH_USER_LOGIN_SUCCESS:
			return action.payload
		case LOGOUT_SUCCESS:
			return {}
		default:
			return state
	}
}

const isAuthenticated = (state = false, action) => {
	switch(action.type) {
		case FETCH_USER_LOGIN_SUCCESS:
			return true
		case 'SIGN_OUT_SUCCESS':
			return false
		default:
			return state 
	}
}

const isFetching = (state = false, action) => {
	switch(action.type) {
		case FETCH_USER_LOGIN_REQUEST:
			return true
		case FETCH_USER_LOGIN_SUCCESS:
		case FETCH_USER_LOGIN_ERROR:
			return false
		default:
			return state
	}
}


export default combineReducers({
	user,
	isAuthenticated,
	isFetching
})


// export default (state=initialState, action) => {
// 	switch(action.type) {
// 		case SET_CURRENT_USER:
// 			return {
// 				...state,
// 				isAuthenticated: !isEmpty(action.payload),
// 				user: action.payload
// 			}
// 		default:
// 			return state;
// 	}
// }