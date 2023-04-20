import React, {useRef} from 'react'
import { useData } from '../store/store';


export const AddPost = () => {

  const {addNewPost} = useData()

  const inputTitle = useRef(null);
  const inputBody = useRef(null); 

const addNewPostHandler = (e) =>{
e.preventDefault();
const newPost = {
    userId: 10,
    id: Math.floor(Math.random() * 1000),
    title: inputTitle.current.value,
    body: inputBody.current.value
}
addNewPost(newPost)


}

  return (
    <>
    <h2>AddPost</h2>
    <form onSubmit={addNewPostHandler}>
        <label htmlFor='title'>Title</label>
        <input type='text' id='title' ref={inputTitle} aria-label='post title' />
        <label htmlFor='body'>Body</label>
        <textarea id='body' ref={inputBody}></textarea>
        <button type='submit'>Send post</button>
    </form>
    </>
  )
}

export default AddPost
