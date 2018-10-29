import {
	FETCH_ALL_POSTS_REQUEST,
	FETCH_ALL_POSTS_SUCCESS,
	FETCH_ALL_POSTS_ERROR,
} from '../../../actions/types'; 

import { combineReducers } from 'redux';

const data = (state = [], action) => {
	switch(action.type) {
		case FETCH_ALL_POSTS_SUCCESS:
			return action.payload
		default:
			return state
	}
}

const isFetching = (state = false, action) => {
	switch(action.type) {
		case FETCH_ALL_POSTS_REQUEST:
			return true
		case FETCH_ALL_POSTS_SUCCESS:
		case FETCH_ALL_POSTS_ERROR:
			return false
		default:
			return state
	}
}

export default combineReducers({
	data,
	isFetching
})
