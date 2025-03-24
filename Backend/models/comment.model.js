import mongoose from 'mongoose';

const commentSchema = new mongoose.Schema(
  {
    comment: { type: String, required: true },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    pin: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Pin',
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

const CommentModel =
  mongoose.model.Comment || mongoose.model('Comment', commentSchema);

export default CommentModel;
