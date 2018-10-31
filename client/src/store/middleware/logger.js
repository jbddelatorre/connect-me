export default store => next => action => {
	console.log('Action Called: ', action)
	console.log('Type of action: ', typeof action)
	next(action)
}