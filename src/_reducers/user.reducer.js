/*
	authentication reeducer é responsavel pelo gerenciamento de Login (e logout) de usuários
	se o usuário já estiver logado a flag `loggedIn` no intialState é definida como true, do contrário
	initialState é um objeto vazio.

	enquanto o cliente faz a comunicação com o servidor a flag `loggingIn` é definida como true.
	em caso de falha, a flag `error` é definida como true e a flag `payload` mostra a descrição do erro.

	em caso de sucesso, loggedIn é definido como true.
*/
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
			return {...state, loggingIn:false, error:true, errorDesc:action.error};
		case userConstants.LOGOUT:
			return {...state, error:false, loggingIn:false, loggedIn:false, payload:action.payload};
		default:
			return {...state}
	}

}