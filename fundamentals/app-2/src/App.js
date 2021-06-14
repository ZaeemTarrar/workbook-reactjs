import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import MainNavigation from './routes/MainNavigation/MainNavigation'
import { useEffect } from 'react'

const App = () => {
  useEffect(() => {
    // Construction
    console.log('Main App')
    return () => {
      // Disstruction
      console.log('Main App - Destroyed')
    }
  }, [])

  return (
    <>
      <MainNavigation />
    </>
  )
}

export default App
