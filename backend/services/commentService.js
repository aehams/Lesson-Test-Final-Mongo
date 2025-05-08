const Comment = require('../models/Comment');

exports.createComment = (data) => Comment.create(data);
exports.getComments = () => Comment.find().populate('user').populate('post');
