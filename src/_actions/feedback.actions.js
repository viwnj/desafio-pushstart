import { feedbackServices } from '../_services';
import { feedbackConstants } from '../_constants';

const sendFeedback = (name, email, message) =>{
	return  async dispatch =>{
		dispatch(request(name));

		try{ //tente enviar o feedback
			const send = await feedbackServices.sendFeedback(name,email,message); 
			return dispatch(success(send));
		}catch(err){
			return dispatch(failure(err))
		}
	}
}

//enquanto o cliente estiver fazendo a comunicação com o back, dispache: 
function request(sender) { return { type: feedbackConstants.FEEDBACK_REQUEST_PENDING, payload:sender } };

// em caso de sucesso, dispache no reducer:
function success(response) { return { type: feedbackConstants.FEEDBACK_REQUEST_SUCCESS, payload:response}};

//em caso de erro por algum motivo, dispache
function failure(error) { return { type: feedbackConstants.FEEDBACK_REQUEST_FAILED, error:error}};

export const feedbackActions = {
	sendFeedback,
}