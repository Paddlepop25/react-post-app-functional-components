import React, { useState, useEffect } from 'react'
import Header from './Header'
const randomColor = require('randomcolor')

function Count() {
  const [count, setCount] = useState(0)
  const [color, setColor] = useState('')

  useEffect(() => {
    const changeCount = setInterval(() => {
      // setCount((prevCount) => prevCount + 1)
      setCount(() => new Date().getTime())
    }, 1000)
    return () => clearInterval(changeCount)
  }, [])

  useEffect(() => {
    setColor(randomColor())
  }, [count])

  return (
    <>
      <Header />
      <p style={timeStameStyle}>Timestamp:</p>
      <h1 style={countStyle}>
        <span style={{ color }}>{count}</span>
      </h1>
    </>
  )
}

const timeStameStyle = {
  textAlign: 'center',
  fontSize: '2.5rem',
  marginTop: '3rem',
  lineHeight: '1',
}
const countStyle = {
  textAlign: 'center',
  fontSize: '4rem',
}

export default Count
