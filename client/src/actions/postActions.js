import { GET_ALL_POSTS, GET_ERRORS, SUBMIT_POST, POST_LOADING } from './types';
import axios from 'axios';

export const getAllPosts = () => (dispatch) => {
	dispatch({
		type: POST_LOADING
	})
	axios.get('/api/posts')
		.then(res => (
			dispatch({
				type: GET_ALL_POSTS,
				payload: res.data
			})
		))
		.catch(err => {
			console.log(err)
		dispatch({
			type: GET_ERRORS,
			payload: err.response.data
			})
		})
}

export const addPost = (newPost) => (dispatch) => {
	dispatch({
		type: POST_LOADING
	})
	axios.post('/api/posts', newPost)
		.then(res => {
			axios.get('/api/posts')
				.then(res => (
					dispatch({
						type: GET_ALL_POSTS,
						payload: res.data
					})
				))
				.catch(err => {
				dispatch({
					type: GET_ERRORS,
					payload: err.response.data
					})
				})
		})
		.catch(err => {
		dispatch({
			type: GET_ERRORS,
			payload: err.response.data
			})
		})
}
