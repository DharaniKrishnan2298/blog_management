import React from "react";
import BlogForm from "../components/BlogForm";
import { useNavigate } from "react-router-dom";

const EditPostPage = ({ post, onEdit }) => {
  const navigate = useNavigate();

  const handleEdit = (updatedPost) => {
    onEdit({ ...post, ...updatedPost }); 
    navigate("/"); 
  };

  return (
    <div>
      <h2>Edit Post</h2>
      <BlogForm onSubmit={handleEdit} initialData={post} />
    </div>
  );
};

export default EditPostPage;
