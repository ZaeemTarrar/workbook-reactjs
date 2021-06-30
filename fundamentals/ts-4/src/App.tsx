import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/App.css'
import React, { useEffect } from 'react'
import MainNavigation from './routes/MainNavigation/MainNavigation'
import Printer from './utils/console'

const App: React.FC = (): JSX.Element => {
  Printer.set(` App Component - Direct `).c('gold').b().s(16).write()

  useEffect(() => {
    Printer.set(` App Component - useEffect`).c('orange').b().s(16).write()
    return () => {
      Printer.set(` App Component - Destroyed`).c('red').b().s(16).write()
    }
  }, [])

  return (
    <>
      <MainNavigation />
    </>
  )
}

export default App
