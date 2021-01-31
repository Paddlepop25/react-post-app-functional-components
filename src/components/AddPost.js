import React, { useState, useEffect } from 'react'

function AddPost(props) {
  const [carb, setCarb] = useState('')
  const [yummies, setYummies] = useState('')

  const handleCarbInput = (event) => {
    setCarb(event.target.value)
  }

  const handleYummiesInput = (event) => {
    setYummies(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    props.handleSubmit({ carb, yummies })
    setCarb('')
    setYummies('')
  }

  return (
    <>
      <form onSubmit={handleSubmit} style={{ display: 'flex' }}>
        <input
          type='text'
          onChange={handleCarbInput}
          value={carb}
          placeholder='enter carb...'
          style={{ flex: '5', padding: '5px' }}
        />
        <input
          type='text'
          onChange={handleYummiesInput}
          value={yummies}
          placeholder='enter yummies...'
          style={{ flex: '5', padding: '10px' }}
        />
        <button
          type='submit'
          style={{ flex: '2', background: 'orange', cursor: 'pointer' }}
        >
          Add Post
        </button>
      </form>
    </>
  )
}

export default AddPost
