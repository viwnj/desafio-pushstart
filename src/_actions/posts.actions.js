import { postConstants } from '../_constants';
import { postServices  } from '../_services';

/*as chamadas a API são performadas em ../_services/posts.services.js*/
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

// enquanto o cliente estiver fazendo a comunicação com o back, dispache:
const requestPosts = () => {return {type:postConstants.POSTS_REQUEST_PENDING}};

// quando os posts forem recebidos, dispache:
const receivedPosts = (posts) => {return {type: postConstants.POSTS_REQUEST_SUCCESS, posts}};

// se ouver erro por algum motivo, dispache:
const requestFailed = (err) => {return{ type:postConstants.POSTS_REQUEST_FAILED, err}};
