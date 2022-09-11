const express = require("express");
const app = express();
const Blog = require("../models/blog");
const axios = require("axios").create({ baseUrl: "http://localhost:5000/" });

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
  try {
    const oldBlog = await Blog.findById(req.params.id);
    if (req.body.img && req.body.img !== "") {
      await axios.delete("api/upload/" + oldBlog.img);
    }
    const blog = await Blog.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.send(blog);
  } catch (error) {
    res.status(500).send(error);
  }
});

// app.delete("/api/blogs", async (req, res) => {
//   try {
//     const blogs = await Blog.find({});
//     blogs.forEach(async (item, index) => {
//       await axios.delete("api/upload/" + item.img);
//     });
//     const doc = await Blog.deleteMany({});

//     res.send(doc);
//   } catch (error) {
//     res.status(500).send(error);
//   }
// });

app.delete("/api/blogs/:id", async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    await axios.delete("api/upload/" + blog.img);
    const doc = await Blog.deleteOne({ _id: req.params.id });
    res.send(doc);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = app;
