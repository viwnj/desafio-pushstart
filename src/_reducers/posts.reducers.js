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