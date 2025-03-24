import mongoose from 'mongoose';

const pinSchema = mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    description: { type: String, required: true, trim: true },
    image: { type: String, required: true },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    comments: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comment',
      },
    ],

    tags: [{ type: String }],
    likes: {
      type: Number,
      default: 0,
    },
    saves: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

const PinModel = mongoose.model.Pin || mongoose.model('Pin', pinSchema);

export default PinModel;
