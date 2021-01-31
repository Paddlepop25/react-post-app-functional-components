import React, { useState, useEffect } from 'react'
import Header from './Header'
import posts from '../postsData.json'

function EditPost(props) {
  const [carb, setCarb] = useState('')
  const [yummies, setYummies] = useState('')

  useEffect(() => {
    const { id } = props.match.params
    console.log(id)
  }, [carb, yummies])

  // console.log(state)

  return (
    <>
      <Header />
      <div className='container'>
        {/* <form onSubmit={saveEditPost}> */}
        <h3 style={{ margin: '15px 0' }}>Edit post</h3>
        <code style={code}>
          Please choose RICE, NOODLES or BREAD from the homepage
        </code>

        <br />
        <br />
        <label>Carb: </label>
        <input
          name='carb'
          value={carb}
          // onChange={editPost}
          maxLength='15'
          style={inputStyle}
        />
        <br />
        <br />
        {/* 
          <label>Yummies: </label>
          <input
            name='yummies'
            value={yummies}
            onChange={editPost}
            maxLength='100'
            style={inputStyle}
          />

          <br />
          <br />

          <button style={saveBtn}>
            {state.post.carb !== '' ? 'Save post' : 'Back to homepage'}
          </button>
        </form> */}
      </div>
    </>
  )
}

const code = {
  color: '#ff5959',
}

const inputStyle = {
  width: '80%',
  padding: '5px',
}

const saveBtn = {
  background: '#fcba03',
  color: '#fff',
  border: 'none',
  padding: '5px 9px',
  borderRadius: '20px',
  cursor: 'pointer',
}

export default EditPost