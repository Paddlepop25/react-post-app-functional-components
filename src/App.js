import React, { useEffect, useState } from 'react'
import Header from './components/Header'
import posts from './postsData.json'
import Posts from './components/Posts'
import AddPost from './components/AddPost'

import './App.css'

function App() {
  const [state, setState] = useState({ posts: [] })

  useEffect(() => {
    setState({ posts })
  }, [])

  const addPost = (post) => {
    const userId = Math.floor(Math.random() * 1000 + 3)
    const id = state.posts.length + userId

    if (post.carb === '' || post.yummies === '') {
      alert('Please fill in both the carb and yummies boxes')
    } else {
      post.userId = userId
      post.id = id
      setState({
        posts: [...state.posts, post],
      })
    }
  }

  const deletePost = (id) => {
    const filterOutDeletedPost = state.posts.filter((post) => {
      return post.id !== id
    })
    setState({
      posts: filterOutDeletedPost,
    })
  }

  return (
    <>
      <Header />
      <AddPost handleSubmit={addPost} />
      <div className='container'>
        <Posts data={state} delPost={deletePost} />
      </div>
    </>
  )
}

export default App
