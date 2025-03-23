import mongoose from 'mongoose';

const pinSchema = mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },

    image: { type: String, required: true },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    comments: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comment',
      },
    ],
    tags: [{ type: String }],
    likes: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
  },
  {
    timestamps: true,
  }
);

const PinModel = mongoose.model.Pin || mongoose.model('Pin', pinSchema);

export default PinModel;
