import { 
	FETCH_CURRENT_POST_REQUEST,
	FETCH_CURRENT_POST_SUCCESS,
	FETCH_CURRENT_POST_ERROR,
	FETCH_ALL_POSTS_REQUEST,
	FETCH_ALL_POSTS_SUCCESS,
	FETCH_ALL_POSTS_ERROR,
	GET_ERRORS, 
	POST_LOADING, 
	GET_COMMENTS
} from './types';



import axios from 'axios';

export const getAllPosts = () => (dispatch) => {
	dispatch({
		type: FETCH_ALL_POSTS_REQUEST
	})
	axios.get('/api/posts')
		.then(res => (
			dispatch({
				type: FETCH_ALL_POSTS_SUCCESS,
				payload: res.data
			})
		))
		.catch(err => {
		dispatch({
			type: GET_ERRORS,
			payload: err.response.data
			})
		})
}

export const getComments = (post_id) => (dispatch) => {
	dispatch({
		type: FETCH_CURRENT_POST_REQUEST
	})
	axios.get(`/api/posts/${post_id}`)
		.then(res => {
			dispatch({
			type: FETCH_CURRENT_POST_SUCCESS,
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

export const addPost = (newPost) => (dispatch) => {
	dispatch({
		type: FETCH_ALL_POSTS_REQUEST
	})
	axios.post('/api/posts', newPost)
		.then(res => {
			axios.get('/api/posts')
				.then(res => (
					dispatch({
						type: FETCH_ALL_POSTS_SUCCESS,
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

export const addComment = (newComment, post_id) => (dispatch) => {
	dispatch({
		type: FETCH_CURRENT_POST_REQUEST
	})
	axios.post(`/api/posts/comment/${post_id}`, newComment)
		.then(res => {
			axios.get(`/api/posts/${post_id}`)
				.then(res => {
					dispatch({
					type: FETCH_CURRENT_POST_SUCCESS,
					payload: res.data
					})
				})
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

export const likePost = (userId, post_id) => (dispatch) => {
	dispatch({
		type: FETCH_ALL_POSTS_REQUEST
	})
	axios.post(`/api/posts/like/${post_id}`, userId)
		.then(res => {
			axios.get('/api/posts')
				.then(res => (
					dispatch({
						type: FETCH_ALL_POSTS_SUCCESS,
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
		})
		.catch(err => {
		dispatch({
			type: GET_ERRORS,
			payload: err.response.data
			})
		})
}

export const unlikePost = (userId, post_id) => (dispatch) => {
	dispatch({
		type: FETCH_ALL_POSTS_REQUEST
	})
	axios.post(`/api/posts/unlike/${post_id}`, userId)
		.then(res => {
			axios.get('/api/posts')
				.then(res => (
					dispatch({
						type: FETCH_ALL_POSTS_SUCCESS,
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
		})
		.catch(err => {
		dispatch({
			type: GET_ERRORS,
			payload: err.response.data
			})
		})
}