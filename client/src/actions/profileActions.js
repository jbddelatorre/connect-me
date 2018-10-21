import axios from 'axios';

import { GET_CURRENT_PROFILE, PROFILE_LOADING, GET_ERRORS, UPDATE_PROFILE, ADD_EXPERIENCE, ADD_EDUCATION } from './types';

//Get current profile

export const getCurrentProfile = () => (dispatch) => {
	dispatch(setProfileLoading());
	axios.get('/api/profile')
		.then(res => {
			// localStorage.setItem('profile', JSON.stringify(res.data));
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
	axios.post('/api/profile', userData)
		.then(res => {
			dispatch({
				type: 'UPDATE_PROFILE',
				payload: res.data
			})
		})
		.catch(err => {
		dispatch({
			type: GET_ERRORS,
			payload: err.response.data
			})
		})
}

export const addExperience = (workExperience, history) => (dispatch) => {
	axios.post('/api/profile/education', workExperience)
		.then(res => {
			dispatch({
				type: 'ADD_EXPERIENCE',
				payload: res.data
			})
			history.push('/profile')
		})
		.catch(err => {
		dispatch({
			type: GET_ERRORS,
			payload: err.response.data
			})
		})
}

export const addEducation = (education, history) => (dispatch) => {
	axios.post('/api/profile/experience', education)
		.then(res => {
			dispatch({
				type: 'ADD_EDUCATION',
				payload: res.data
			})
			history.push('/profile')
		})
		.catch(err => {
		dispatch({
			type: GET_ERRORS,
			payload: err.response.data
			})
		})
}

export const deleteExperience = (id) => (dispatch) => {
	axios.delete(`/api/profile/experience/${id}`)
		.then(res => {
			dispatch({
				type: 'GET_CURRENT_PROFILE',
				payload: res.data
			})
		})
		.catch(err => {
		dispatch({
			type: GET_ERRORS,
			payload: err.response.data
			})
		})
}

//Profile loading

export const setProfileLoading = () => {
	return {
		type: 'PROFILE_LOADING'
	}
}