const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  content: String,
  post: { type: mongoose.Schema.Types.ObjectId, ref: 'Post' },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

module.exports = mongoose.model('Comment', commentSchema);
