import React, { useRef, useEffect } from 'react'

const App = () => {

  const iptRef = useRef()

  useEffect(() => {
    iptRef.current.focus()
  }, [])

  return (
    <input type='text' ref={iptRef} />
  )
}

export default App