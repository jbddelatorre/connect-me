import { 
	GET_CURRENT_PROFILE, 
	PROFILE_LOADING, 
	GET_ERRORS, 
	ADD_EXPERIENCE,  
	ADD_EDUCATION, 
	GET_ALL_PROFILE,
	GET_DEVELOPER_PROFILE,
	UPDATE_PROFILE } from '../actions/types';
// import isEmpty from '../validation/is-empty';


const initialState = {
	profile: {},
	profiles: [],
	current: {},
	loading:false
}

export default (state=initialState, action) => {

	// initialState.profile = localStorage.profile ? JSON.parse(localStorage.profile) : {}

	switch(action.type) {
		case PROFILE_LOADING:
			return {
				...state,
				loading: true
			}
		case GET_CURRENT_PROFILE:
			return {
				...state,
				profile: action.payload,
				loading: false
			}
		case UPDATE_PROFILE:
			return {
				...state,
				profile: action.payload,
				loading: false
			}
		case ADD_EXPERIENCE:
			return {
				...state,
				profile: {
					...state.profile,
					experience: [action.payload ,...state.profile.experience]
				},
				loading: false
			}
		case ADD_EDUCATION:
			return {
				...state,
				profile: {
					...state.profile,
					education: [action.payload ,...state.profile.education]
				},
				loading: false
			}
		case GET_ALL_PROFILE:
			return {
				...state,
				profiles: [...action.payload],
				loading: false
			}
		case GET_DEVELOPER_PROFILE:
			return {
				...state,
				current: action.payload,
				loading: false
			}
		default:
			return state;
	}
}