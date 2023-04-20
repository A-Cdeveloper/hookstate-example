import React from 'react'
import SinglePost from './SinglePost'

const Posts = ({posts}) => {
  return (
    <>
        {posts.map(post => {
            return <SinglePost key={post.id} id={post.id} title={post.title} body={post.body}/>
        })}
    </>
  )
}

export default Posts
