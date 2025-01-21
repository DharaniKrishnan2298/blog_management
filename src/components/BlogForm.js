import React, { useState } from "react";

const BlogForm = ({ onSubmit, initialData = {} }) => {
  const [title, setTitle] = useState(initialData.title || "");
  const [body, setBody] = useState(initialData.body || "");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !body) {
      alert("Both fields are required.");
      return;
    }
    onSubmit({ title, body });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">Title</label>
      <input
        id="title"
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter post title"
      />
      <label htmlFor="body">Content</label>
      <textarea
        id="body"
        value={body}
        onChange={(e) => setBody(e.target.value)}
        placeholder="Write your post content here"
        rows="6"
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default BlogForm;
