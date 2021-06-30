import * as ActionTypes from './../../actionTypes';

const initialState = {
	count: 0
};

const counterReducer = (state = initialState, action) => {
	switch (action.type) {
		case ActionTypes.ADD_COUNTER:
			{
				return { ...state, count: state.count + 1 };
			}
			break;
		case ActionTypes.SUBTRACT_COUNTER:
			{
				return { ...state, count: state.count - 1 };
			}
			break;
		default: {
			return state;
		}
	}
};

export default counterReducer;
