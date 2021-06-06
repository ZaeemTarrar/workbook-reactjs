import * as ActionTypes from './../../static/actionTypes/actionTypes'
import { T_ActionResponse } from './../../contracts/ActionResponse'
import { I_Article } from './../../contracts/Article'
import { T_DispatchMethod } from './../../contracts/DispatchMethod'

export const addArticle = (
  dispatch: T_DispatchMethod,
  article: I_Article,
): T_ActionResponse => {
  return dispatch({
    type: ActionTypes.ADD_ARTICLE,
    payload: {
      article,
    },
  })
}
