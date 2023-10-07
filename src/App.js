import React, { useState, useEffect } from "react";
import { getPosts } from "./Api";
import BlogCard from "./BlogCard";
import "./App.css";

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await getPosts();
      setPosts(data);
    }

    fetchData();
  }, []);

  return (
    <div className="row" id="posts">
      {posts.map((post) => (
        <BlogCard post={post} />
      ))}
    </div>
  );
}

export default App;
