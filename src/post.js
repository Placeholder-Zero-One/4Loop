const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true
  },
  caption: {
    type: String,
    required: true
  },
  likes: {
    type: Number,
    required: true
  },
  media: {
    data: Buffer,
    contentType: String
  }
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
