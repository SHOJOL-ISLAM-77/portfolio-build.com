// src/components/BlogForm.jsx
import React, { useState } from "react";

const BlogForm = ({ initialData, onSubmit }) => {
  const [formData, setFormData] = useState(
    initialData || {
      title: "",
      content: "",
      author: "",
      date: "",
    }
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6">{initialData ? "Edit Blog" : "Create Blog"}</h2>
      <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-2">Title</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-2">Content</label>
        <textarea
          name="content"
          value={formData.content}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows="5"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-2">Author</label>
        <input
          type="text"
          name="author"
          value={formData.author}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-2">Date</label>
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors"
      >
        {initialData ? "Update Blog" : "Create Blog"}
      </button>
    </form>
  );
};

export default BlogForm;