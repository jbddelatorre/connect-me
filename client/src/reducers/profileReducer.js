import { GET_CURRENT_PROFILE, PROFILE_LOADING, GET_ERRORS, ADD_EXPERIENCE } from '../actions/types';
import isEmpty from '../validation/is-empty';


const initialState = {
	profile: {},
	profiles: {},
	loading:false
}

export default (state=initialState, action) => {

	initialState.profile = localStorage.profile ? JSON.parse(localStorage.profile) : {}

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
		case 'UPDATE_PROFILE':
			return {
				...state,
				profile: action.payload,
				loading: false
			}
		case 'ADD_EXPERIENCE':
			return {
				...state,
				profile: {
					...state.profile,
					experience: [action.payload ,...state.profile.experience]
				},
				loading: false
			}
		default:
			return state;
	}
}