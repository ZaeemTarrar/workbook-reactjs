import * as ActionTypes from './../../static/actionTypes/actionTypes'
import { T_StoreState } from './../../contracts/StoreState'
import { T_ActionResponse } from './../../contracts/ActionResponse'

const initialState: T_StoreState = {
  articles: [],
}

const reducer = (
  state: T_StoreState = initialState,
  action: T_ActionResponse,
): T_StoreState => {
  switch (action?.type) {
    case ActionTypes.ADD_ARTICLE:
      return {
        ...state,
        articles: [...state.articles, action?.payload?.article],
      }
    default:
      return state
  }
}

export default reducer
