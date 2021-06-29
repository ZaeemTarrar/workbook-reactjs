import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/App.css'
import React from 'react'
import Notes from './components/function/Notes/Notes'
import { Container } from 'react-bootstrap'

const App: React.FC = (): JSX.Element => {
  return (
    <>
      <Container>
        <Notes heading="My Notes" />
      </Container>
    </>
  )
}

export default App
