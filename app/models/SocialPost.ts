import mongoose from 'mongoose';

const socialPostSchema = new mongoose.Schema({
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Employee',
    required: true
  },
  content: {
    type: String,
    required: true
  },
  media: [{
    type: String,
    url: String
  }],
  likes: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Employee'
  }],
  comments: [{
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Employee'
    },
    content: String,
    createdAt: {
      type: Date,
      default: Date.now
    }
  }],
  tags: [String],
  visibility: {
    type: String,
    enum: ['Public', 'Department', 'Private'],
    default: 'Public'
  }
}, { timestamps: true });

const SocialPost = mongoose.models.SocialPost || mongoose.model('SocialPost', socialPostSchema);
export default SocialPost;