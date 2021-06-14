import React, { useEffect, useState } from 'react'

const Home = () => {
  const [name, setName] = useState('')
  const nameChangeHandler = (event) => {
    setName(event.target.value)
  }
  useEffect(() => {
    // Construction
    console.log('Home')
    return () => {
      // Disstruction
      console.log('Home - D')
    }
  }, [])

  useEffect(() => {
    console.log('Updated')
    return () => {
      console.log('Updated - D')
    }
  }, [name])

  return (
    <>
      <h1>Home</h1>
      <div className="container">
        <input
          className="form-control"
          placeholder="name"
          value={name}
          onChange={nameChangeHandler}
        />
        <br />
        <br />
        <div>
          <h2> {name} </h2>
        </div>
      </div>
    </>
  )
}

export default Home
