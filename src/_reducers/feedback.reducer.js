import { feedbackConstants } from '../_constants';
/*
	O feedback reducer gerencia o state relacionado ào envio de Feedback.
	Caso o envio de feedback falhe, o state de envio tem uma flag de error que definida para 'true'.
	Enquanto o cliente estiver fazendo a comunicação com o back o state de envio 
	tem uma flag 'pending' definida para 'true'
	Em caso de sucesso, ambos error e pending são definidas como false e o payload é
	definido como a resposta recebida pelo back. 
*/

export function feedbackReducer(state={}, action){
	switch(action.type){
		case feedbackConstants.FEEDBACK_REQUEST_PENDING:
			return {...state, error:false, pending:true, payload:action.payload};
		case feedbackConstants.FEEDBACK_REQUEST_SUCCESS:
			return{...state, error: false, pending:false, payload:action.payload};
		case feedbackConstants.FEEDBACK_REQUEST_FAILED:
			return {...state, error:true, pending:false, payload:action.payload};
		default:
			return state;
	}
}