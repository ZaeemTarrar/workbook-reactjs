import * as ActionTypes from './../../actionTypes/index'
import { T_StoreActionResponse } from './../../../contracts/base/index'
import { Dispatch } from 'redux'
import { T_Todo } from '../../../contracts/others/todos'
import TodosService from './../../../services/Todos/Todos'
import Printer from '../../../utils/console'

export const FetchTodos = (dispatch: Dispatch): T_StoreActionResponse => {
  Printer.set(` Todos Action Method `).c('purple').b().s(16).write()
  return TodosService.Get()
    .then((data: T_Todo[]) => {
      Printer.set(` Todos Action Dispatch `).c('pink').b().s(16).write()
      return dispatch({
        type: ActionTypes.GET_TODOS,
        payload: {
          todos: data,
        },
      })
    })
    .catch((e: Error) => {
      console.log('Error: ', e)
    })
}
