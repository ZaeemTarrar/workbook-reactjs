import * as ActionTypes from './../../actionTypes';

export const AddCounter = (dispatch) => {
	return dispatch({
		type: ActionTypes.ADD_COUNTER,
		payload: null
	});
};

export const SubtractCounter = (dispatch) => {
	return dispatch({
		type: ActionTypes.SUBTRACT_COUNTER,
		payload: null
	});
};
