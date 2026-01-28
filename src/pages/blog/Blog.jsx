import { Link } from "react-router-dom";
import blog1 from "../../img/blog1.jfif";
import blog2 from "../../img/blog2.jfif";
import blog3 from "../../img/blog3.jfif";

const blogs = [
  {
    id: 1,
    title: "Top 10 Gadgets You Should Buy in 2025",
    image: blog1,
    date: "Jan 10, 2025",
    desc: "Discover the latest tech gadgets that are changing the game this year.",
  },
  {
    id: 2,
    title: "How to Choose the Perfect Smartphone",
    image: blog2,
    date: "Jan 5, 2025",
    desc: "A simple guide to help you choose the best phone for your needs.",
  },
  {
    id: 3,
    title: "Why Online Shopping Is the Future",
    image: blog3,
    date: "Dec 28, 2024",
    desc: "Learn why e-commerce continues to grow faster than ever.",
  },
];

function Blog() {
  return (
    <div className="layout-container py-16">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-3">
          Our <span className="text-blue-600">Blog</span>
        </h1>
        <p className="text-gray-600 max-w-xl mx-auto">
          Read the latest articles, news, and insights from our team.
        </p>
      </div>

      {/* Blog Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="group rounded-2xl overflow-hidden border hover:shadow-lg transition"
          >
            {/* Image */}
            <div className="overflow-hidden">
              <img
                src={blog.image}
                alt={blog.title}
                className="h-56 w-full object-cover group-hover:scale-105 transition"
              />
            </div>

            {/* Content */}
            <div className="p-5">
              <span className="text-sm text-gray-400">{blog.date}</span>

              <h3 className="text-lg font-semibold mt-2 line-clamp-2">
                {blog.title}
              </h3>

              <p className="text-gray-600 text-sm mt-2 line-clamp-2">
                {blog.desc}
              </p>

              <Link
                to={`/blog/${blog.id}`}
                className="inline-block mt-4 text-blue-600 font-medium hover:underline"
              >
                Read More →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blog;
