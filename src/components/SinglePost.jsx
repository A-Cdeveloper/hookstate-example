import React from 'react'
import { useData } from '../store/store';

export const SinglePost = ({userId, id, title, body}) => {

  const {deletePost} = useData()

  return (
    <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
    <h2>{title}</h2>
    <p>{body}</p>
    <button onClick={() => deletePost(id)}>DELETE</button>
    </div>
  )
}

export default SinglePost;