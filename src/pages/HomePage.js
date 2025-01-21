import React, { useEffect, useState } from "react";
import BlogList from "../components/BlogList";

const HomePage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    
    fetch("http://localhost:3000/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((error) => console.error("Error fetching posts:", error));
  }, []);

  return (
    <div className="home-page">
      <h2>Welcome to the Blog Management System</h2>
      <BlogList posts={posts} />
    </div>
  );
};

export default HomePage;
