import { userConstants } from '../_constants';
import { userService } from '../_services';
import { history } from '../_helpers';


const login = (username, password) =>{
	return  async dispatch =>{
		dispatch(request(username))
		try{
			// tente logar com o usuário e senha providenciados pelo usuário
			const login = await userService.login(username,password);
			history.push('/');		
			return dispatch(success(login));
		}
		catch(err){
			dispatch(failure(err))
		}

	}
}
function request(user) { return { type: userConstants.LOGIN_REQUEST_PENDING, payload:user } };
function success(user) { return { type: userConstants.LOGIN_REQUEST_SUCCESS, payload:'User authenticated'} };
function failure(error) { return { type: userConstants.LOGIN_REQUEST_FAILED, error:error}};

const logout = () =>{
	userService.logout();
	return{ type: userConstants.LOGOUT, payload:'LOGOUT'};
}



export const userActions = {
	login,
	logout,
}