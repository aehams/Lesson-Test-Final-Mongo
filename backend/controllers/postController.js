const service = require('../services/postService');

exports.getPosts = async (req, res) => {
  const posts = await service.getPosts();
  res.json(posts);
};

exports.createPost = async (req, res) => {
  const post = await service.createPost(req.body);
  res.status(201).json(post);
};

