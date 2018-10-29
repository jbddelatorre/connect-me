import { combineReducers } from 'redux';

import single_profile from './SingleProfile'
import all_developers from './AllDevelopers'

export default combineReducers({
	all_developers,
	single_profile
})