import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import CreatePostPage from "./pages/CreatePostPage";
import EditPostPage from "./pages/EditPostPage";
import BlogList from "./components/BlogList";
import ViewPostPage from "./pages/ViewPostPage";
import { useParams } from "react-router-dom";

const App = () => {
  const [posts, setPosts] = useState([
    { id: 1, title: "Sample Post 1", body: "This is the first post" },
    { id: 2, title: "Sample Post 2", body: "This is the second post" },
  ]);

  const handleCreate = (newPost) => {
    setPosts([...posts, { ...newPost, id: Date.now() }]);
  };


  const handleEdit = (updatedPost) => {
    setPosts(
      posts.map((post) =>
        post.id === updatedPost.id ? updatedPost : post
      )
    );
  };

  
  const handleDelete = (id) => {
    setPosts(posts.filter((post) => post.id !== id));
  };

  return (
    <Router>
      <div className="container">
        <nav style={{ marginBottom: "20px" }}>
          <Link to="/" style={{ marginRight: "20px" }}>Home</Link>
          <Link to="/create">Create New Post</Link>
        </nav>
        <Routes>
          <Route
            path="/"
            element={<BlogList posts={posts} onDelete={handleDelete} />}
          />
          <Route
            path="/create"
            element={<CreatePostPage onCreate={handleCreate} />}
          />
          <Route
            path="/edit/:id"
            element={<EditPostWrapper posts={posts} onEdit={handleEdit} />}
          />
          <Route
            path="/view/:id"
            element={<ViewPostWrapper posts={posts} />}
          />
        </Routes>
      </div>
    </Router>
  );
};

const EditPostWrapper = ({ posts, onEdit }) => {
  const { id } = useParams();
  const post = posts.find((p) => p.id === parseInt(id, 10));

  if (!post) {
    return <div>Post not found!</div>;
  }

  return <EditPostPage post={post} onEdit={onEdit} />;
};

const ViewPostWrapper = ({ posts }) => {
  const { id } = useParams();
  const post = posts.find((p) => p.id === parseInt(id, 10));

  if (!post) {
    return <div>Post not found!</div>;
  }

  return <ViewPostPage post={post} />;
};

export default App;
