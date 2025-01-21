import React from "react";
import { Link } from "react-router-dom";

const ViewPostPage = ({ post }) => {
  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <Link to="/">
        <button>Back to Home</button>
      </Link>
    </div>
  );
};

export default ViewPostPage;
