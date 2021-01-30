import React, { useEffect, useState } from 'react'
import Header from './components/Header'
import posts from './postsData.json'
import Posts from './components/Posts'
import './App.css'

function App() {
  const [state, setState] = useState({ posts: [] })

  useEffect(() => {
    const stopLoop = setInterval(() => {
      setState({ posts: posts }, [])
    }, 1000)
    return () => clearInterval(stopLoop)
  })

  console.log('state >>> ', state)

  const delPost = (id) => {
    console.log(id)
  }

  // const postsComponent = posts.map((post) => {
  //   return (
  //     <Posts
  //       key={post.id}
  //       id={post.id}
  //       carb={post.carb}
  //       yummies={post.yummies}
  //       delPost={delPost}
  //     />
  //   )
  // })
  return (
    <>
      <Header />
      <div className='container'>
        <Posts />
      </div>
    </>
  )
}

export default App
