import axios from 'axios';

import { GET_CURRENT_PROFILE, PROFILE_LOADING, GET_ERRORS } from './types';

//Get current profile

export const getCurrentProfile = () => (dispatch) => {
	dispatch(setProfileLoading());
	axios.get('/api/profile')
		.then(res => {
			console.log(res.data)
			dispatch({
				type:'GET_CURRENT_PROFILE',
				payload: res.data
			})
			})
			
		.catch(err => 
			dispatch({
				type:'GET_CURRENT_PROFILE',
				payload: {}
			}))
}

//Profile loading

export const setProfileLoading = () => {
	return {
		type: 'PROFILE_LOADING'
	}
}