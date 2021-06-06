import React, { FC, ReactElement } from 'react'
import './styles/App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Test from './components/Test/Test'

const App: FC = (): ReactElement => {
  return (
    <div id="wrapper">
      <Test
        firstname="zaeem"
        lastname="tarrar"
        age={25}
        address={{
          country: 'pakistan',
          city: 'lahore',
          town: 'askari11',
          houseNumber: 9,
        }}
      />
    </div>
  )
}

export default App
