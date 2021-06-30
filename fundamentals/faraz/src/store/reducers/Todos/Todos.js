import * as ActionTypes from './../../actionTypes';

const initialState = {
	todos: []
};

const todosReducer = (state = initialState, action) => {
	switch (action.type) {
		case ActionTypes.GET_TODOS:
			{
				return { ...state, todos: action.payload.todos };
			}
			break;
		default: {
			return state;
		}
	}
};

export default todosReducer;
