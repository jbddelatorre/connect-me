import { GET_ALL_POSTS, GET_ERRORS, SUBMIT_POST } from './types';
import axios from 'axios';

export const getAllPosts = () => (dispatch) => {
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
	console.log('addpost')
	axios.post('/api/posts', newPost)
		.then(res => (
			dispatch({
				type: GET_ALL_POSTS,
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
