
import { useEffect } from "react";
import Posts from "./components/Posts";
import AddPost from "./components/AddPost";

import { useData } from "./store/store";



function App() {

  const {posts,loading, errors, setPosts } = useData()

  useEffect(() =>{
        setPosts()
        console.log('render')
  },[])

 let content = <Posts posts={posts.get()} />

   if (errors.get()) {
    content =  <p>Error</p>;
  } 
  if (loading.get() && !errors.get()) {
    content =  <p>Loading...</p>;
  }




  return (
    <div className="main">
      <AddPost />
      <h2>Posts</h2>
      {content}
    </div>
  );
}

export default App
