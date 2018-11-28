import { postConstants } from '../_constants';
import { postServices  } from '../_services';

export const fetchPosts = (authToken) =>{
	return async (dispatch) =>{
		dispatch(requestPosts());
		try{
			const data = await postServices.getPosts(authToken);
			return dispatch(receivedPosts(data));
		}
		catch(err){
			return dispatch(requestFailed(err));
		}
	}
}

const requestPosts = () => {return {type:postConstants.POSTS_REQUEST_PENDING}};
const receivedPosts = (posts) => {return {type: postConstants.POSTS_REQUEST_SUCCESS, posts}};
const requestFailed = (err) => {return{ type:postConstants.POSTS_REQUEST_FAILED, err}};
