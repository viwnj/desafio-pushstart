import { userConstants } from '../_constants';
let user = JSON.parse(localStorage.getItem('user'));


const initialState = user ? {loggedIn: true, user} : {};


export function authentication(state=initialState, action) {
	switch(action.type){
		case userConstants.LOGIN_REQUEST_PENDING:
			return {...state, loggingIn: true, loggedIn:false}
		case userConstants.LOGIN_REQUEST_SUCCESS:
			return {...state, loggedIn:true, user:action.payload} 
		case userConstants.LOGIN_REQUEST_FAILED:
			return {...state, loggingIn:false, error:true, payload:action.error};
		case userConstants.LOGOUT:
			return {...state, error:false, loggingIn:false, loggedIn:false, payload:action.payload};
		default:
			return {...state}
	}

}