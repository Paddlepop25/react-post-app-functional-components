import Header from './components/Header'
import posts from './postsData.json'
import Posts from './components/Posts'
import './App.css'

function App() {
  const delPost = (id) => {
    console.log(id)
  }

  const postsComponent = posts.map((post) => {
    return (
      <Posts
        key={post.id}
        id={post.id}
        carb={post.carb}
        yummies={post.yummies}
        delPost={delPost}
      />
    )
  })
  return (
    <>
      <Header />
      <div className='container'>{postsComponent}</div>
    </>
  )
}

export default App
