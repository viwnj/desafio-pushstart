import { userConstants } from '../_constants';
import { userService } from '../_services';
import { history } from '../_helpers';


const  login = (username, password) =>{
	return  dispatch =>{
		dispatch(request(username))
		userService.login(username,password)
			.then((user)=>{
				if(user.token){
					dispatch(success(user));
					history.push('/');
				}
				else{
					const error = {...user};
					dispatch(failure(error.message));
				}
			}).catch(error=> dispatch(failure(error)));

	}
}
function request(user) { return { type: userConstants.LOGIN_REQUEST_PENDING, payload:user } };
function success(user) { return { type: userConstants.LOGIN_REQUEST_SUCCESS, payload:user.token } };
function failure(error) { return { type: userConstants.LOGIN_REQUEST_FAILED, error:error}};

const logout = () =>{
	userService.logout();
	return{ type: userConstants.LOGOUT, payload:'LOGOUT'};
}

const sendFeedback = (name, email, message) =>{
	return dispatch =>{
		dispatch({type:userConstants.FEEDBACK_REQUEST_PENDING, payload: message});
			fetch('https://teste.pushstart.com.br/api/feedback',{
				method:'POST',
				headers:{'Content-Type':'application/json'},
				body:JSON.stringify({
					'name':name,
					'email':email,
					'message':message,
				})
			})
			.then(response =>{
				return response.ok ? dispatch({type:userConstants.FEEDBACK_REQUEST_SUCCESS, payload:response}) : dispatch({type:userConstants.FEEDBACK_REQUEST_FAILED, payload:response})
			}).catch(err=> dispatch({type:userConstants.FEEDBACK_REQUEST_FAILED, payload:err}))
	}
}


export const userActions = {
	login,
	logout,
	sendFeedback,
}