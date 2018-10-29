import axios from 'axios';

import { 
	FETCH_ALL_DEVELOPERS_REQUEST,
	FETCH_ALL_DEVELOPERS_SUCCESS,
	FETCH_ALL_DEVELOPERS_ERROR,
	FETCH_PROFILE_REQUEST,
	FETCH_PROFILE_SUCCESS,
	FETCH_PROFILE_ERROR,
	GET_ERRORS
} from './types';


export const getAllProfile = () => (dispatch) => {
	dispatch({
		type: FETCH_ALL_DEVELOPERS_REQUEST
	})

	axios.get(`/api/profile/all`)
		.then(res => {
			dispatch({
				type: FETCH_ALL_DEVELOPERS_SUCCESS,
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

export const getDeveloperProfile = (id) => (dispatch) => {
	dispatch({
		type: FETCH_PROFILE_REQUEST
	})

	axios.get(`/api/profile/user/${id}`)
		.then(res => {
			dispatch({
				type: FETCH_PROFILE_SUCCESS,
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
	