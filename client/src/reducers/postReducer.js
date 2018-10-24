import { 
	GET_ALL_POSTS,
	SUBMIT_POST,
	POST_LOADING } from '../actions/types';
// import isEmpty from '../validation/is-empty';


const initialState = {
	currentPost: null,
	posts: null,
	loading:false
}

export default (state=initialState, actions) => {
	switch(actions.type) {
		case POST_LOADING: 
			return {
				...state,
				loading:true
			}
		case GET_ALL_POSTS:
			return {
				...state,
				posts: actions.payload,
				loading:false
			}
		default:
			return state
	}
}