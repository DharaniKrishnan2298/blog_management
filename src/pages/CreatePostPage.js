import React from "react";
import BlogForm from "../components/BlogForm";
import { useNavigate } from "react-router-dom";

const CreatePostPage = ({ onCreate }) => {
  const navigate = useNavigate();

  const handleCreate = (newPost) => {
    onCreate(newPost); 
    navigate("/"); 
  };

  return (
    <div>
      <h2>Create a New Post</h2>
      <BlogForm onSubmit={handleCreate} />
    </div>
  );
};

export default CreatePostPage;
