import { combineReducers } from 'redux';

import current_post from './CurrentPost'
import posts from './Posts'

export default combineReducers({
	current_post,
	posts
})