import Header from './components/Header'
import posts from './postsData.json'
import Posts from './components/Posts'
import './App.css'

function App() {
  const postsComponent = posts.map((post) => {
    return <Posts key={post.id} carb={post.carb} yummies={post.yummies} />
  })
  return (
    <>
      <Header />
      <div className='container'>{postsComponent}</div>
    </>
  )
}

export default App
