import React from 'react'
import { Dispatch } from 'redux'
import { T_StoreActionResponse } from '../../base'

/**
 * A Single Todo's Properties
 */
export type T_Todo = {
  userId?: number
  id?: number
  title?: string
  completed?: boolean
}

/**
 * Todos Store Rules
 */
export interface I_TodosStore {
  todos: T_Todo[]
}

/**
 * Action Rules
 */
export interface I_TodosActions {
  // addNote: (note: T_Todo) => T_StoreActionResponse
}
