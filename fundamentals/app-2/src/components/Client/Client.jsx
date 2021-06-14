import React, { useEffect } from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home/Home'
import About from './About/About'
import Contact from './Contact/Contact'
import Navbar from './Navbar/Navbar'

const Client = () => {
  useEffect(() => {
    // Construction
    console.log('Client')
    return () => {
      // Disstruction
      console.log('Client - D')
    }
  }, [])

  return (
    <>
      <>
        <Navbar />
      </>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/about" exact>
          <About />
        </Route>
        <Route path="/contact" exact>
          <Contact />
        </Route>
      </Switch>
    </>
  )
}

export default Client
