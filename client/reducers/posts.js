// a reducer takes in two things.

// 1. it takes in the action
// 2. copy of current state

export default function posts (state = [], action) {
	console.log('This post will change!')
	console.log(state, action)
	return state;
}