import axios from 'axios';

import { 
	FETCH_USER_PROFILE_REQUEST,
	FETCH_USER_PROFILE_SUCCESS,
	FETCH_USER_PROFILE_ERROR,
	GET_ERRORS, 
	ADD_EXPERIENCE, 
	ADD_EDUCATION, 
} from './types';

//Get current profile

export const getCurrentProfile = () => (dispatch) => {
	dispatch(setProfileLoading());
	axios.get('/api/profile')
		.then(res => {
			dispatch({
				type:FETCH_USER_PROFILE_SUCCESS,
				payload: res.data
				})
			})
		.catch(err => 
			dispatch({
				type:FETCH_USER_PROFILE_SUCCESS,
				payload: {}
			}))
}

export const updateProfile = (userData) => (dispatch) => {
	dispatch(setProfileLoading());
	axios.post('/api/profile', userData)
		.then(res => {
			dispatch({
				type: FETCH_USER_PROFILE_SUCCESS,
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
	axios.post('/api/profile/experience', workExperience)
		.then(res => {
			dispatch({
				type: ADD_EXPERIENCE,
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
	dispatch(setProfileLoading());
	axios.post('/api/profile/education', education)
		.then(res => {
			dispatch({
				type: ADD_EDUCATION,
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
	dispatch(setProfileLoading());
	axios.delete(`/api/profile/experience/${id}`)
		.then(res => {
			dispatch({
				type: FETCH_USER_PROFILE_SUCCESS,
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

export const deleteEducation = (id) => (dispatch) => {
	dispatch(setProfileLoading());
	axios.delete(`/api/profile/education/${id}`)
		.then(res => {
			dispatch({
				type: FETCH_USER_PROFILE_SUCCESS,
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

// export const getAllProfile = () => (dispatch) => {

// 	axios.get(`/api/profile/all`)
// 		.then(res => {
// 			dispatch({
// 				type: GET_ALL_PROFILE,
// 				payload: res.data
// 			})
// 		})
// 		.catch(err => {
// 		dispatch({
// 			type: GET_ERRORS,
// 			payload: err.response.data
// 			})
// 		})
// }

// export const getDeveloperProfile = (id) => (dispatch) => {

// 	axios.get(`/api/profile/user/${id}`)
// 		.then(res => {
// 			dispatch({
// 				type: GET_DEVELOPER_PROFILE,
// 				payload: res.data
// 			})
// 		})
// 		.catch(err => {
// 		dispatch({
// 			type: GET_ERRORS,
// 			payload: err.response.data
// 			})
// 		})
// }

//Profile loading

export const setProfileLoading = () => {
	return {
		type: FETCH_USER_PROFILE_REQUEST
	}
}