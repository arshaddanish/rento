const express = require("express");
const app = express();
const { Blog, BlogCategory } = require("../models/blog");
const deleteImg = require("../services/deleteImg");
const axios = require("axios").create({ baseUrl: "http://localhost:5000/" });

app.get("/api/blogs", async (req, res) => {
  const blogs = await Blog.find({}).sort({ date: -1 });

  try {
    res.send(blogs);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.get("/api/blogs3", async (req, res) => {
  const blogs = await Blog.find({}).limit(3).sort({ date: -1 });

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

app.get("/api/blogs-filter/:category", async (req, res) => {
  const blogs = await Blog.find({ category: req.params.category }).sort({
    date: -1,
  });

  try {
    res.send(blogs);
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
    if (req.body.img && req.body.img !== "") {
      const oldBlog = await Blog.findById(req.params.id);
      await deleteImg(oldBlog.img);
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
    await deleteImg(blog.img);
    const doc = await Blog.deleteOne({ _id: req.params.id });
    res.send(doc);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.get("/api/blog-categories", async (req, res) => {
  const blogCategories = await BlogCategory.find({});

  try {
    res.send(blogCategories);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.post("/api/blog-categories", async (req, res) => {
  const blogCategory = new BlogCategory(req.body);

  try {
    await blogCategory.save();
    res.send(blogCategory);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.patch("/api/blog-categories/:id", async (req, res) => {
  try {
    const oldBlogCategory = await BlogCategory.findById(req.params.id);
    await Blog.updateMany({ category: oldBlogCategory }, req.body);
    const blogCategory = await BlogCategory.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );
    res.send(blogCategory);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.delete("/api/blog-categories/:id", async (req, res) => {
  try {
    const blogCategory = await BlogCategory.findById(req.params.id);
    let blogs = await Blog.find({ category: blogCategory.blogCategory });
    blogs.forEach(async (item, index) => {
      await axios.delete("api/blogs/" + item._id);
    });
    const doc = await BlogCategory.deleteOne({ _id: req.params.id });
    res.send(doc);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = app;
