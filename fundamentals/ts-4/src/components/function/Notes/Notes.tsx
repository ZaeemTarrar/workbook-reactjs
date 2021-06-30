import React, { ChangeEvent, MouseEvent, MouseEventHandler } from 'react'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import {
  T_Note,
  I_NotesProps,
  I_NotesStore,
  I_NotesActions,
} from '../../../contracts/others/notes'
import { AddNote } from '../../../contracts/../store/actions/notes/index'
import { AppState } from './../../../store/index'
import { Button } from 'react-bootstrap'

const Notes: React.FC<I_NotesProps> = (props): JSX.Element => {
  const [title, setTitle] = React.useState<string>('')
  const [description, setDescription] = React.useState<string>('')

  const clearForm: Function = (): void => {
    setTitle('')
    setDescription('')
  }

  const handleAddNote: MouseEventHandler<HTMLElement> = (
    e: MouseEvent<HTMLElement>,
  ) => {
    e.preventDefault()
    let Chain = new Promise<void>((resolve, reject) => resolve())
    Chain.then(() => {
      let note: T_Note = {
        title,
        description,
      }
      return note
    })
      .then((note) => {
        props?.addNote(note)
      })
      .then(() => {
        clearForm()
      })
      .catch((err) => {
        console.log('Error: ', err)
      })
  }

  return (
    <>
      <br />
      <br />
      <br />
      <h1> {props?.heading ?? 'Anonymous'} </h1>
      <div>
        <br />
        <br />
        <input
          type="text"
          id="title"
          name="title"
          placeholder="Title"
          value={title}
          className="form-control"
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setTitle(e.target.value)
          }
        />
        <br />
        <br />
        <input
          type="text"
          id="description"
          name="description"
          placeholder="Description"
          value={description}
          className="form-control"
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setDescription(e.target.value)
          }
        />
        <br />
        <br />
        <Button onClick={handleAddNote}> Add Note </Button>
        <br />
        <br />
      </div>
      <p>{JSON.stringify(props?.notes, null, 2)}</p>
    </>
  )
}

const mapStateToProps = (state: AppState): I_NotesStore => ({
  notes: state.notes.notes,
})

const mapDispatchToProps = (dispatch: Dispatch): I_NotesActions => {
  return {
    addNote: (note: T_Note) => AddNote(dispatch, note),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Notes)
