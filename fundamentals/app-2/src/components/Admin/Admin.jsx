import React, { useEffect } from 'react'

const Admin = () => {
  useEffect(() => {
    // Construction
    console.log('Admin')
    return () => {
      // Disstruction
      console.log('Admin - D')
    }
  }, [])

  return <>Admin</>
}

export default Admin
