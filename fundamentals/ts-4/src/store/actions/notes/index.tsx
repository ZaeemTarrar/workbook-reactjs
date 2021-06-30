import * as ActionTypes from './../../actionTypes/index'
import { T_StoreActionResponse } from './../../../contracts/base/index'
import { Dispatch } from 'redux'
import { T_Note } from '../../../contracts/others/notes'

export const AddNote = (
  dispatch: Dispatch,
  note: T_Note,
): T_StoreActionResponse => {
  return dispatch({
    type: ActionTypes.ADD_NOTES,
    payload: {
      note,
    },
  })
}
