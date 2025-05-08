const Post = require('../models/Post');

exports.createPost = (data) => Post.create(data);
exports.getPosts = () => Post.find().populate('user');
