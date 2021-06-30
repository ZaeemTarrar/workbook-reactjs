import * as ActionTypes from './../../actionTypes';
import Printer from '../../../utils/console';
import TodosService from '../../../services/Todos/Todos';

export const FetchTodos = (dispatch) => {
	Printer.set(`Todo Action Method`).c('purple').s(16).b().write();
	TodosService.Get()
		.then((data) => {
			Printer.set(`Todo Dispatch Method`).c('blue').s(16).b().write();
			return dispatch({
				type: ActionTypes.GET_TODOS,
				payload: {
					todos: data
				}
			});
		})
		.catch((e) => {
			Printer.set(`Todo Service Crashed !!!`).c('red').s(18).b().write();
		});
};
