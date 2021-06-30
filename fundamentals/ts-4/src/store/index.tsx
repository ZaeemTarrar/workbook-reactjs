import { createStore, combineReducers } from 'redux'
// import { createLogger } from 'redux-logger'

import { notesReducer } from './reducers/notes/index'
import { todosReducer } from './reducers/todos/index'

// const logger = createLogger()

export const rootReducer = combineReducers({
  notes: notesReducer,
  todos: todosReducer,
})

export type AppState = ReturnType<typeof rootReducer>

export const Store = createStore(rootReducer)
