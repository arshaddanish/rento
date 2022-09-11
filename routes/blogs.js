const express = require("express");
const app = express();
const Blog = require("../models/blog");

app.get("/api/blogs", async (req, res) => {
  const blogs = await Blog.find({});

  try {
    res.send(blogs);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.get("/api/blogs/:id", async (req, res) => {
  const blog = await Blog.findById(req.params.id);

  try {
    res.send(blog);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.post("/api/blogs", async (req, res) => {
  const blog = new Blog(req.body);

  try {
    await blog.save();
    res.send(blog);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.patch("/api/blogs/:id", async (req, res) => {
  const blog = await Blog.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  try {
    res.send(blog);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.delete("/api/blogs", async (req, res) => {
  const doc = await Blog.deleteMany({});

  try {
    res.send(doc);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.delete("/api/blogs/:id", async (req, res) => {
  const doc = await Blog.deleteOne({ _id: req.params.id });

  try {
    res.send(doc);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = app;
