import React from 'react'
import { Dispatch } from 'redux'
import { T_StoreActionResponse } from '../../base'

/**
 * A Single Note's Properties
 */
export type T_Note = {
  title: string
  description?: string
}

/**
 * Notes Store Rules
 */
export interface I_NotesStore {
  notes: T_Note[]
}

/**
 * Action Rules
 */
export interface I_NotesActions {
  addNote: (note: T_Note) => T_StoreActionResponse
}

/**
 * Notes Component Rules
 */
export interface I_NotesProps extends I_NotesActions, I_NotesStore {
  heading: string
  notes: T_Note[]
}
