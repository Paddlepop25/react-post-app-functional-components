import React, { useState, useEffect } from 'react'
import Header from './Header'
const randomColor = require('randomcolor')

function Count() {
  const [count, setCount] = useState(0)
  const [color, setColor] = useState('')

  useEffect(() => {
    const changeCount = setInterval(() => {
      setCount((prevCount) => prevCount + 1)
    }, 1000)
    return () => clearInterval(changeCount)
  }, [])

  useEffect(() => {
    setColor(randomColor())
  }, [count])

  return (
    <>
      <Header />
      <h1 style={countStyle}>
        <span style={{ color }}>{count}</span>
      </h1>
    </>
  )
}

const countStyle = {
  textAlign: 'center',
  fontSize: '6rem',
  marginTop: '3rem',
}

export default Count
