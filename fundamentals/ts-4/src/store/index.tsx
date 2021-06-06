import { createStore, combineReducers, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'

import { notesReducer } from './reducers/notes/index'

const logger = createLogger()

export const rootReducer = combineReducers({
  notes: notesReducer,
})

export type AppState = ReturnType<typeof rootReducer>

export const Store = createStore(rootReducer)
