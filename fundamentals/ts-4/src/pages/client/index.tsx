import React, { useEffect } from 'react'
import { Route, Switch } from 'react-router-dom'
import Game from '../../components/function/Game/Game'
import Todos from '../../components/function/Todos/Todos'
import Printer from '../../utils/console'

const Client: React.FC = (): JSX.Element => {
  Printer.set(` Client Component - Direct `).c('gold').b().s(16).write()

  useEffect(() => {
    Printer.set(` Client Component - useEffect`).c('orange').b().s(16).write()
    return () => {
      Printer.set(` Client Component - Destroyed`).c('red').b().s(16).write()
    }
  }, [])

  return (
    <>
      <Switch>
        <Route path="/" exact>
          <Todos />
        </Route>
        <Route path="/game" exact>
          <Game />
        </Route>
      </Switch>
    </>
  )
}

export default Client
