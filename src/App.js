import React, { useEffect, useState } from 'react'
import Header from './components/Header'
import posts from './postsData.json'
import Posts from './components/Posts'
import AddPost from './components/AddPost'

import './App.css'

function App() {
  const [state, setState] = useState({ posts })

  // useEffect(() => {
  //   setState({ posts })
  // }, [state])

  const delPost = (id) => {
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
      <AddPost />
      <div className='container'>
        <Posts data={state} delPost={delPost} />
      </div>
    </>
  )
}

export default App
