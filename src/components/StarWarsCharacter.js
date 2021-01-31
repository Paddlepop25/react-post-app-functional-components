import React, { useState, useEffect } from 'react'
import Header from './Header'
import { BarLoader } from 'react-spinners'

function StarWarsCharacter() {
  const [loading, setLoading] = useState(true)
  const [starWarsCharacter, setstarWarsCharacter] = useState({})

  useEffect(() => {
    const randomId = Math.floor(Math.random() * 80) + 1
    fetch(`https://swapi.dev/api/people/${randomId}`)
      .then((result) => result.json())
      .then((data) => setstarWarsCharacter(data))
  }, [loading])
  return (
    <>
      <Header />
      <div style={cardStyle}>
        <h3>
          Name: <code style={codeStyle}>{starWarsCharacter.name}</code>
        </h3>
      </div>
    </>
  )
}

const cardStyle = {
  border: '1px dashed red',
  width: '50%',
  margin: '0 auto',
}

const codeStyle = {
  fontSize: '2rem',
  color: '#44c1c9',
}
export default StarWarsCharacter
