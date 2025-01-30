// src/components/BlogCard.jsx
import React from "react";
import { Link } from "react-router-dom";

const BlogCard = ({ blog }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="p-6">
        <h2 className="text-xl font-bold mb-2">{blog.title}</h2>
        <p className="text-gray-700 mb-4">{blog.content}</p>
        <div className="text-sm text-gray-600">
          <p>By {blog.author}</p>
          <p>Published on {blog.date}</p>
        </div>
        <div className="mt-4">
          <Link
            to={`/edit/${blog.id}`}
            className="text-blue-500 hover:text-blue-700 font-semibold"
          >
            Edit
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;