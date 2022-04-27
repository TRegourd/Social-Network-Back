const Post = require("../models/Post");

const createPost = async (req, res) => {
  const newPost = new Post(req.body);

  try {
    const savedPost = await newPost.save();
    res.status(200).send(savedPost);
  } catch {
    res.status(500).send(err);
  }
};

const Posts = {
  createPost,
};

module.exports = Posts;
