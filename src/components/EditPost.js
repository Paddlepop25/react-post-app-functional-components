import React, { useState, useEffect } from 'react'
import Header from './Header'
import posts from '../postsData.json'

function EditPost(props) {
  const [carb, setCarb] = useState('')
  const [yummies, setYummies] = useState('')

  useEffect(() => {
    const { id } = props.match.params

    if (id > 3) {
      alert('Please choose RICE, NOODLES or BREAD\nfor the edit page')
    } else {
      let post = posts.filter((post) => post.id === Number(id))[0]
      setCarb(post.carb)
      setYummies(post.yummies)
    }
  }, [setCarb, setYummies])

  const editPost = (event) => {
    if (event.target.name === 'carb') {
      setCarb(event.target.value)
    }
    if (event.target.name === 'yummies') {
      setYummies(event.target.value)
    }
  }

  const saveEditPost = (event) => {
    event.preventDefault()
    console.log('saved edited post') // save to database in real life
    setCarb('')
    setYummies('')
    props.history.push('/')
  }

  return (
    <>
      <Header />
      <div className='container'>
        <form onSubmit={saveEditPost}>
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
            onChange={editPost}
            maxLength='15'
            style={inputStyle}
          />
          <br />
          <br />

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
            {carb !== '' || yummies !== '' ? 'Save post' : 'Back to homepage'}
          </button>
        </form>
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
  color: '#333',
  border: 'none',
  padding: '5px 9px',
  borderRadius: '20px',
  cursor: 'pointer',
}

export default EditPost
