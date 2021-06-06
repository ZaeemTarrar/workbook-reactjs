import * as ActionTypes from '../../actionTypes/index'
import { Action, Reducer } from 'redux'
import { I_NotesStore } from '../../../contracts/others/notes/index'
import { T_StoreActionResponse } from './../../../contracts/base/index'

const initialState: I_NotesStore = {
  notes: [],
}

export const notesReducer: Reducer<I_NotesStore, T_StoreActionResponse> = (
  state = initialState,
  action,
): I_NotesStore => {
  switch (action?.type) {
    case ActionTypes.ADD_NOTES: {
      return {
        ...state,
        notes: [...state.notes, action?.payload?.note],
      }
    }
    default: {
      return state
    }
  }
}
