import { devtools } from "@hookstate/devtools";
import { hookstate, useHookstate, none } from "@hookstate/core";

import {getPosts,sendPost} from '../utils/api'

export const state = hookstate(
  {
    posts: [],
    errors: false,
    loading: false
  },
  devtools({ key: "post from external" })
);


export const useData = () =>{
  const {posts, errors, loading} = useHookstate(state)

  const setPosts = async () => {
    loading.set(true)
    try {
      const data = await getPosts()
      posts.set(data);
      localStorage.setItem('posts', JSON.stringify(data))
    } catch (error) {
      errors.set(true)
    }
    loading.set(false)
  };


  const addNewPost = async (newPost) => {
    posts.merge([newPost]);
    await sendPost(newPost)
  };

  const deletePost = (id) => {
    const key = posts.get().findIndex((el) => el.id === id);
    posts[key].set(none);
  };
  
return {
  posts, 
  errors, 
  loading,
  setPosts,
  addNewPost,
  deletePost
}
}


// export const setPosts = async () => {
//   state.loading.set(true)
//   try {
//     const data = await getPosts()
//     state.posts.set(data);
//     localStorage.setItem('posts', JSON.stringify(data))
//   } catch (error) {
//     state.errors.set(true)
//   }
//   state.loading.set(false)
// };

// export const addNewPost = async (newPost) => {
//   state.posts.merge([newPost]);
//   //await sendPost(newPost)

// };

// export const deletePost = (id) => {
//   const key = state.posts.get().findIndex((el) => el.id === id);
//   state.posts[key].set(none);
// };
