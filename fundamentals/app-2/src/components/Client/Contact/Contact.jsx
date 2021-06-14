import React, { useEffect } from 'react'

const Contact = () => {
  useEffect(() => {
    // Construction
    console.log('Contact')
    return () => {
      // Disstruction
      console.log('Contact - D')
    }
  }, [])

  return <> Contact </>
}

export default Contact
