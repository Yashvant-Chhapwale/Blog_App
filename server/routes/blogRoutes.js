const express = require("express");
const Blog = require("../models/Blog");
const router = express.Router();

// Create a new blog
router.post("/", async (req, res) => {
  try {
    const { title, image, content, author } = req.body;
    const newBlog = new Blog({ title, image, content, author });
    await newBlog.save();
    res.status(201).json(newBlog);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get all blogs
router.get("/", async (req, res) => {
  try {
    const blogs = await Blog.find().populate("author", "username"); // Populate author field
    res.json(blogs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update a Blog
router.put("/:id", async (req, res) => {
  const updatedBlog = await Blog.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.json(updatedBlog);
});

// Delete a Blog
router.delete("/:id", async (req, res) => {
  await Blog.findByIdAndDelete(req.params.id);
  res.status(204).send();
});

module.exports = router;
