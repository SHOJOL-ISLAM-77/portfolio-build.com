import React, { useState } from "react";

const EditablePortfolio = () => {
  // State for all editable fields
  const [profileImage, setProfileImage] = useState("https://via.placeholder.com/150");
  const [name, setName] = useState("John Doe");
  const [description, setDescription] = useState("A passionate web developer with expertise in React and Node.js.");
  const [skills, setSkills] = useState("React, Node.js, JavaScript, Tailwind CSS");
  const [projects, setProjects] = useState([
    {
      title: "Project 1",
      description: "A web application built with React and Node.js.",
      image: "https://via.placeholder.com/400",
      link: "https://example.com",
    },
    {
      title: "Project 2",
      description: "A mobile app for task management.",
      image: "https://via.placeholder.com/400",
      link: "https://example.com",
    },
  ]);
  const [socialLinks, setSocialLinks] = useState([
    {
      platform: "GitHub",
      url: "https://github.com",
      icon: "https://cdn-icons-png.flaticon.com/512/25/25231.png",
    },
    {
      platform: "LinkedIn",
      url: "https://linkedin.com",
      icon: "https://cdn-icons-png.flaticon.com/512/174/174857.png",
    },
    {
      platform: "Twitter",
      url: "https://twitter.com",
      icon: "https://cdn-icons-png.flaticon.com/512/124/124021.png",
    },
  ]);

  // Function to handle project changes
  const handleProjectChange = (index, field, value) => {
    const updatedProjects = [...projects];
    updatedProjects[index][field] = value;
    setProjects(updatedProjects);
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen p-8">
      {/* Editable Input Section */}
      <div className="mb-12 p-6 bg-gray-800 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Edit Your Portfolio</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Profile Image URL</label>
            <input
              type="text"
              value={profileImage}
              onChange={(e) => setProfileImage(e.target.value)}
              className="w-full p-2 bg-gray-700 rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-2 bg-gray-700 rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Description</label>
            <input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full p-2 bg-gray-700 rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Skills (comma-separated)</label>
            <input
              type="text"
              value={skills}
              onChange={(e) => setSkills(e.target.value)}
              className="w-full p-2 bg-gray-700 rounded-md"
            />
          </div>
          {projects.map((project, index) => (
            <div key={index} className="space-y-2">
              <h3 className="text-lg font-semibold">Project {index + 1}</h3>
              <div>
                <label className="block text-sm font-medium mb-1">Title</label>
                <input
                  type="text"
                  value={project.title}
                  onChange={(e) => handleProjectChange(index, "title", e.target.value)}
                  className="w-full p-2 bg-gray-700 rounded-md"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Description</label>
                <input
                  type="text"
                  value={project.description}
                  onChange={(e) => handleProjectChange(index, "description", e.target.value)}
                  className="w-full p-2 bg-gray-700 rounded-md"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Image URL</label>
                <input
                  type="text"
                  value={project.image}
                  onChange={(e) => handleProjectChange(index, "image", e.target.value)}
                  className="w-full p-2 bg-gray-700 rounded-md"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Project Link</label>
                <input
                  type="text"
                  value={project.link}
                  onChange={(e) => handleProjectChange(index, "link", e.target.value)}
                  className="w-full p-2 bg-gray-700 rounded-md"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Portfolio Display Section */}
      <div className="bg-gray-800 p-8 rounded-lg">
        {/* Header Section */}
        <header className="text-center mb-12">
          <img src={profileImage} alt="Profile" className="w-32 h-32 rounded-full mx-auto mb-4" />
          <h1 className="text-4xl font-bold">{name}</h1>
          <p className="text-lg text-gray-400 mt-2">{description}</p>
        </header>

        {/* Skills Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {skills.split(",").map((skill, index) => (
              <span key={index} className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm">
                {skill.trim()}
              </span>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div key={index} className="bg-gray-700 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <img src={project.image} alt={project.title} className="w-full h-48 object-cover rounded-md mb-4" />
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-400">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-400 mt-4 inline-block">
                  View Project
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Social Links Section */}
        <section className="text-center">
          <h2 className="text-2xl font-semibold mb-4">Connect with Me</h2>
          <div className="flex justify-center gap-4">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors">
                <img src={link.icon} alt={link.platform} className="w-8 h-8" />
              </a>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default EditablePortfolio;
