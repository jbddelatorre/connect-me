import { 
	FETCH_PROFILE_REQUEST,
	FETCH_PROFILE_SUCCESS,
	FETCH_PROFILE_ERROR,
} from '../../../actions/types';

import { combineReducers } from 'redux';

const profile = (state = {}, action) => {
	switch(action.type) {
		case FETCH_PROFILE_SUCCESS:
			return action.payload
		default:
			return state
	}
}

const isFetching = (state = false, action) => {
	switch(action.type) {
		case FETCH_PROFILE_REQUEST:
			return true
		case FETCH_PROFILE_SUCCESS:
		case FETCH_PROFILE_ERROR:
			return false
		default:
			return state
	}
}

export default combineReducers({
	profile,
	isFetching
})