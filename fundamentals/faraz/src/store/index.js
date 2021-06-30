import { createStore, combineReducers } from 'redux';

import testReducer from './reducers/Test/Test';
import counterReducer from './reducers/Counter/Counter';
import todosReducer from './reducers/Todos/Todos';

const rootReducer = combineReducers({
	test: testReducer,
	counter: counterReducer,
	todos: todosReducer
});

const Store = createStore(rootReducer);

export default Store;
