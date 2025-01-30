import React from "react";
import BlogForm from "../components/BlogForm";
import { useParams, useNavigate } from "react-router-dom";

const CreateBlog = () => {
  const navigate = useNavigate();

  const handleSubmit = (formData) => {
    console.log("New Blog:", formData);
    // Add logic to save the blog (e.g., API call)
    navigate("/"); // Redirect to home page after creation
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <BlogForm onSubmit={handleSubmit} />
      </div>
    </div>
  );
};

