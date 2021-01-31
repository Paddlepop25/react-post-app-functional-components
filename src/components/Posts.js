function Posts(props) {
  const posts = props.data.posts

  return (
    <>
      {posts.map((post) => {
        return (
          <div key={post.id}>
            <h4>{post.carb.toUpperCase()}</h4>
            <span>{post.yummies}</span>
            <button style={editBtn}>Edit</button>
            <button style={delBtn} onClick={() => props.delPost(post.id)}>
              X
            </button>
          </div>
        )
      })}
    </>
  )
}

const editBtn = {
  background: '#008716',
  border: 'none',
  padding: '5px 9px',
  borderRadius: '20px',
  cursor: 'pointer',
  marginLeft: '10px',
  marginRight: '4px',
}

const delBtn = {
  background: '#ff0000',
  color: '#fff',
  border: 'none',
  padding: '5px 9px',
  borderRadius: '20px',
  cursor: 'pointer',
}

export default Posts
