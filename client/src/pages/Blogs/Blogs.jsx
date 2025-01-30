import BlogCard from "./Components/BlogCard";

const blogs = [
  {
    id: 1,
    title: "Getting Started with React",
    content:
      "React is a JavaScript library for building user interfaces. Learn how to set up your first React project.",
    author: "John Doe",
    date: "2023-10-01",
  },
  {
    id: 2,
    title: "Tailwind CSS for Beginners",
    content:
      "Tailwind CSS is a utility-first CSS framework. Discover how to use it to style your applications quickly.",
    author: "Jane Smith",
    date: "2023-10-05",
  },
  {
    id: 3,
    title: "Building Responsive UIs",
    content:
      "Learn how to create responsive designs using modern CSS techniques and frameworks.",
    author: "Alice Johnson",
    date: "2023-10-10",
  },
];

const Blogs = () => {
  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-8">
          Blogs
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
