import { feedbackConstants } from '../_constants';


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