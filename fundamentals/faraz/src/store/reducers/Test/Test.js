import * as ActionTypes from './../../actionTypes';

const initialState = {
	test: null
};

const testReducer = (state = initialState, action) => {
	switch (action.type) {
		case ActionTypes.TEST:
			{
				return state;
			}
			break;
		default: {
			return state;
		}
	}
};

export default testReducer;
