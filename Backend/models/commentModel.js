import mongoose from 'mongoose';

const commentSchema = mongoose.Schema(
  {
    text: { type: String, required: true },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    pin: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Pin',
    },
    createedAt: {
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
