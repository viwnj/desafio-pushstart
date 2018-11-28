/*
	getPosts reducer gerencia o state relacionado ao 'fetch' dos posts.
	Enquanto o client faz a comunicaçção com o servidor a flag 'isPending' é definida como true.
	Caso o carragamento dos posts falhe, a flag 'error' descreve o tipo de erro ocorrido.
	Em caso de sucesso, a flag 'posts' é preenchida com os posts recebidos do servidor

*/

import {postConstants} from '../_constants';

const initialState ={
	isPending:false,
	posts:[],
	err:'',
}
export function getPosts(state=initialState, action) {
	switch(action.type){
		case postConstants.POSTS_REQUEST_PENDING:
			return {...state, isPending:true}
		case postConstants.POSTS_REQUEST_SUCCESS:
			return {...state, isPending:false, posts:[...action.posts]} 
		case postConstants.POSTS_REQUEST_FAILED:
			return {...state, isPending:false, error:action.err};
		default:
			return {...state}
	}

}