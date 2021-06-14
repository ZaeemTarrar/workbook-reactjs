import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Admin from './../../components/Admin/Admin'
import Client from './../../components/Client/Client'

const MainNavigation = () => {
  return (
    <>
      <Switch>
        <Route path="/admin">
          <Admin />
        </Route>
        <Route path="/">
          <Client />
        </Route>
      </Switch>
    </>
  )
}

export default MainNavigation
