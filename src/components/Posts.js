function Posts(props) {
  return (
    <>
      {/* <h4>{props.carb.toUpperCase()}</h4>
      <span>{props.yummies}</span>
      <button style={editBtn}>Edit</button>
      <button style={delBtn} onClick={() => props.delPost(props.id)}>
        X
      </button> */}
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
