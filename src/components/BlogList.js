import React from "react";
import { Link } from "react-router-dom";

const BlogList = ({ posts, onDelete }) => {
  return (
    <div>
      <h2>Blog Posts</h2>
      {posts.length === 0 ? (
        <p>No posts available. Create a new one!</p>
      ) : (
        posts.map((post) => (
          <div key={post.id} className="blog-post">
            <Link to={`/view/${post.id}`} className="blog-title-link">
              {post.title}
            </Link>
            <p>{post.body.slice(0, 100)}...</p>
            <div>
              <Link to={`/edit/${post.id}`}>
                <button>Edit</button>
              </Link>
              <button onClick={() => onDelete(post.id)} className="delete-button">
                Delete
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default BlogList;
