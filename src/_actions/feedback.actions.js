import { feedbackServices } from '../_services';
import { feedbackConstants } from '../_constants';

const sendFeedback = (name, email, message) =>{
	return  async dispatch =>{
		dispatch(request(name));
		try{
			const send = await feedbackServices.sendFeedback(name,email,message)
			return dispatch(success(send))			
		}catch(err){
			return dispatch(failure(err))
		}
	}
}

function request(sender) { return { type: feedbackConstants.FEEDBACK_REQUEST_PENDING, payload:sender } };
function success(response) { return { type: feedbackConstants.FEEDBACK_REQUEST_SUCCESS, payload:response}};
function failure(error) { return { type: feedbackConstants.FEEDBACK_REQUEST_FAILED, error:error}};

export const feedbackActions = {
	sendFeedback,
}