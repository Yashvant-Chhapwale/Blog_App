import React, { useEffect, useState } from "react";
import axios from "axios";

const SeeOtherBlogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      const response = await axios.get("http://localhost:5000/api/blogs");
      setBlogs(response.data);
    };
    fetchBlogs();
  }, []);

  return (
    <div className="container">
      <h2>See Other Blogs</h2>
      <div className="list-group">
        {blogs.map((blog) => (
          <div className="list-group-item" key={blog._id}>
            <h5>{blog.title}</h5>
            <img src={blog.image} alt={blog.title} className="img-fluid" />
            <p>{blog.content}</p>
            <p className="text-muted">By {blog.author.username}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SeeOtherBlogs;
