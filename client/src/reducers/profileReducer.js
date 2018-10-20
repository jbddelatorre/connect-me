import { GET_CURRENT_PROFILE, PROFILE_LOADING, GET_ERRORS } from '../actions/types';
import isEmpty from '../validation/is-empty';

const initialState = {
	profile: {},
	profiles: {},
	loading:false
}

export default (state=initialState, action) => {
	switch(action.type) {
		case 'PROFILE_LOADING':
			return {
				...state,
				loading: true
			}
		case 'GET_CURRENT_PROFILE':
			return {
				...state,
				profile: action.payload,
				loading: false
			}
		default:
			return state;
	}
}