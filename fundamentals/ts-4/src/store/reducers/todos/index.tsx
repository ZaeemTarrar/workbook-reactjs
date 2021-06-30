import * as ActionTypes from '../../actionTypes/index'
import { Reducer } from 'redux'
import { I_TodosStore } from '../../../contracts/others/todos/index'
import { T_StoreActionResponse } from './../../../contracts/base/index'

const initialState: I_TodosStore = {
  todos: [],
}

export const todosReducer: Reducer<I_TodosStore, T_StoreActionResponse> = (
  state = initialState,
  action,
): I_TodosStore => {
  switch (action?.type) {
    case ActionTypes.GET_TODOS:
      {
        return { ...state, todos: action?.payload?.todos }
      }
      break
    default: {
      return state
    }
  }
}
