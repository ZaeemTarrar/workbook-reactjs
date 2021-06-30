import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { I_TodosStore, T_Todo } from '../../../contracts/others/todos'
import { AppState } from './../../../store/index'
import { I_TodosActions } from './../../../contracts/others/todos/index'
import { FetchTodos } from '../../../store/actions/todos'
import Printer from '../../../utils/console'
import { CheckCircleFill, XOctagonFill } from 'react-bootstrap-icons'

const Todos: React.FC = (props: any): JSX.Element => {
  Printer.set(` Todos Component - Direct `).c('gold').b().s(16).write()

  useEffect(() => {
    Printer.set(` Todos Component - useEffect`).c('orange').b().s(16).write()
    Refreshers()
    return () => {
      Printer.set(` Todos Component - Destroyed`).c('red').b().s(16).write()
    }
  }, [])

  useEffect(() => {
    Printer.set(` Todos List Data Change - useEffect`)
      .c('orange')
      .b()
      .s(16)
      .write()
    return () => {
      Printer.set(` Todos List Data Change - useEffect Destroyed`)
        .c('red')
        .b()
        .s(16)
        .write()
    }
  }, [props.todos])

  const Refreshers: Function = (): void => {
    Printer.set(` Todos Component - Refresher`).c('blue').b().s(16).write()
    props.fetchTodos()
  }

  const TableWrapper: Function = (content: JSX.Element): JSX.Element => {
    return (
      <>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th> Id </th>
              <th> User Id </th>
              <th> Title </th>
              <th> Completed </th>
            </tr>
          </thead>
          <tbody>{content ?? null}</tbody>
        </table>
      </>
    )
  }

  const ListOfTodos: Function = (): JSX.Element => {
    return props.todos.map((row: T_Todo, index: any) => {
      return <React.Fragment key={index}>{SingleTodo(row)}</React.Fragment>
    })
  }

  const SingleTodo: Function = (data: T_Todo): JSX.Element => {
    const { userId, id, title, completed } = data
    return (
      <>
        <tr>
          <td>{id}</td>
          <td>{userId}</td>
          <td>{title}</td>
          <td style={{ textAlign: `center` }}>
            {completed ? (
              <CheckCircleFill color={`green`} size={30} />
            ) : (
              <XOctagonFill color={`red`} size={30} />
            )}
          </td>
        </tr>
      </>
    )
  }

  return (
    <>
      <br />
      <br />
      <div>
        <button className="btn btn-primary" onClick={() => Refreshers()}>
          Refresh Data
        </button>
      </div>
      <br />
      <br />
      {TableWrapper(ListOfTodos())}
    </>
  )
}

const mapStateToProps = (state: AppState): I_TodosStore => ({
  todos: state.todos.todos,
})

const mapDispatchToProps = (dispatch: Dispatch): I_TodosActions => {
  return {
    fetchTodos: () => FetchTodos(dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Todos)
