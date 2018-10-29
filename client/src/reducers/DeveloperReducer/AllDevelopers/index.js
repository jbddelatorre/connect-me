import { 
	FETCH_ALL_DEVELOPERS_REQUEST,
	FETCH_ALL_DEVELOPERS_SUCCESS,
	FETCH_ALL_DEVELOPERS_ERROR,
} from '../../../actions/types';

import { combineReducers } from 'redux';

const profiles = (state = [], action) => {
	switch(action.type) {
		case FETCH_ALL_DEVELOPERS_SUCCESS:
			return action.payload
		default:
			return state
	}
}

const isFetching = (state = false, action) => {
	switch(action.type) {
		case FETCH_ALL_DEVELOPERS_REQUEST:
			return true
		case FETCH_ALL_DEVELOPERS_SUCCESS:
		case FETCH_ALL_DEVELOPERS_ERROR:
			return false
		default:
			return state
	}
}

export default combineReducers({
	profiles,
	isFetching
})