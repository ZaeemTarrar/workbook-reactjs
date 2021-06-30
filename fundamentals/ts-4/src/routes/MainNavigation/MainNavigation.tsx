import React, { useEffect } from 'react'
import Printer from '../../utils/console'
import { Switch, Route } from 'react-router-dom'
import Client from '../../pages/client'

const MainNavigation: React.FC = (): JSX.Element => {
  Printer.set(` Main Navigation Component - Direct `)
    .c('gold')
    .b()
    .s(16)
    .write()

  useEffect(() => {
    Printer.set(` Main Navigation Component - useEffect`)
      .c('orange')
      .b()
      .s(16)
      .write()
    return () => {
      Printer.set(` Main Navigation Component - Destroyed`)
        .c('red')
        .b()
        .s(16)
        .write()
    }
  }, [])

  return (
    <>
      <Switch>
        <Route path="/admin" exact>
          <h1>Admin</h1>
        </Route>
        <Route path="/">
          <Client />
        </Route>
      </Switch>
    </>
  )
}

export default MainNavigation
