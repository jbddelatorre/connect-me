import {
	FETCH_CURRENT_POST_REQUEST,
	FETCH_CURRENT_POST_SUCCESS,
	FETCH_CURRENT_POST_ERROR,
} from '../../../actions/types'; 

import { combineReducers } from 'redux';

const current = (state = {}, action) => {
	switch(action.type) {
		case FETCH_CURRENT_POST_SUCCESS:
			return action.payload
		default:
			return state
	}
}

const isFetching = (state = false, action) => {
	switch(action.type) {
		case FETCH_CURRENT_POST_REQUEST:
			return true
		case FETCH_CURRENT_POST_SUCCESS:
		case FETCH_CURRENT_POST_ERROR:
			return false
		default:
			return state
	}
}

export default combineReducers({
	current,
	isFetching
})
