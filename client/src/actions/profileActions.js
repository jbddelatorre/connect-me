import axios from 'axios';

import { GET_CURRENT_PROFILE, PROFILE_LOADING, GET_ERRORS, UPDATE_PROFILE } from './types';

//Get current profile

export const getCurrentProfile = () => (dispatch) => {
	dispatch(setProfileLoading());
	axios.get('/api/profile')
		.then(res => {
			
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

export const updateProfile = (userData) => (dispatch) => {
	// dispatch(setProfileLoading());
	axios.post('/api/profile', userData)
		.then(res => {
			console.log(userData)
			dispatch({
				type: 'UPDATE_PROFILE',
				payload: res.data
			})
		})
		.catch(err => {
			console.log(err)
			}) 
			
} 

//Profile loading

export const setProfileLoading = () => {
	return {
		type: 'PROFILE_LOADING'
	}
}