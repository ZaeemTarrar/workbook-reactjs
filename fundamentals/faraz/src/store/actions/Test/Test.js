import * as ActionTypes from './../../actionTypes';

export const Test = (dispatch) => {
	return dispatch({
		type: ActionTypes.TEST,
		payload: null
	});
};
