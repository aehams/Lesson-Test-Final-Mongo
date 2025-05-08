const service = require('../services/commentService');

exports.getComments = async (req, res) => {
  const comments = await service.getComments();
  res.json(comments);
};

exports.createComment = async (req, res) => {
  const comment = await service.createComment(req.body);
  res.status(201).json(comment);
};
