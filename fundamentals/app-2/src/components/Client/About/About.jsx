import React, { useEffect } from 'react'

const About = () => {
  useEffect(() => {
    // Construction
    console.log('About')
    return () => {
      // Disstruction
      console.log('About - D')
    }
  }, [])

  return <> About </>
}

export default About
