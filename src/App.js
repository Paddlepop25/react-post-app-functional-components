import React, { useEffect, useState } from 'react'
import Header from './components/Header'
import posts from './postsData.json'
import Posts from './components/Posts'
import './App.css'

function App() {
  const [state, setState] = useState(posts)

  // useEffect(() => {
  //   setState({ posts })
  // }, [state])

  // console.log('state.posts >>> ', state.posts)

  // const postsComponent = state.posts.map((post) => {
  //   return post
  //   // return (
  //   //   <Posts
  //   //     key={post.id}
  //   //     id={post.id}
  //   //     carb={post.carb}
  //   //     yummies={post.yummies}
  //   //     delPost={delPost}
  //   //   />
  //   // )
  // })
  // console.log(postsComponent)

  const delPost = (id) => {
    console.log(id)
  }

  return (
    <>
      <Header />
      <div className='container'>
        <Posts data={state} delPost={delPost} />
      </div>
    </>
  )
}

export default App
