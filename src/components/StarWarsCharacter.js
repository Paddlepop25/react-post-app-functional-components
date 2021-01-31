import React, { useState, useEffect } from 'react'
import Header from './Header'
import { css } from '@emotion/core'
import BarLoader from 'react-spinners/BarLoader'

function StarWarsCharacter() {
  const [isLoading, setisLoading] = useState(true)
  const [starWarsCharacter, setstarWarsCharacter] = useState({})

  useEffect(() => {
    const randomId = Math.floor(Math.random() * 80) + 1
    fetch(`https://swapi.dev/api/people/${randomId}`)
      .then((result) => result.json())
      .then((data) => {
        setisLoading(false)
        setstarWarsCharacter(data)
      })
  }, [])
  return (
    <>
      <Header />
      <div style={cardStyle}>
        <BarLoader color='#f00af0' loading={isLoading} css={override} />
        {isLoading ? 'Loading...' : null}
        <br />
        <br />
        <h3>
          Name: <code style={codeStyle}>{starWarsCharacter.name}</code>
          <br />
          Height: <code style={codeStyle}>{starWarsCharacter.height}</code>
          <br />
          Mass: <code style={codeStyle}>{starWarsCharacter.mass}</code>
          <br />
          Skin color:{' '}
          <code style={codeStyle}>{starWarsCharacter['skin_color']}</code>
          <br />
          Birth year:{' '}
          <code style={codeStyle}>{starWarsCharacter['birth_year']}</code>
        </h3>
      </div>
    </>
  )
}

const override = css`
  display: block;
  margin: 0 auto;
`

const cardStyle = {
  // border: '1px dashed red',
  width: '50%',
  margin: '1rem auto',
  textAlign: 'center',
}

const codeStyle = {
  fontSize: '2rem',
  color: '#44c1c9',
  paddingLeft: '5px',
}
export default StarWarsCharacter
