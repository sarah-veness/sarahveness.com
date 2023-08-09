import mongoose from 'mongoose';

const PostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  published_date: {
    type: Date,
    required: true,
  },
  updated_date: {
    type: String,
    required: false,
  }
})

const Post = mongoose.model('post', PostSchema);

export default Post;