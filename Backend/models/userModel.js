import mongoose from 'mongoose';

const userSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    bio: { type: String, default: '' },
    username: { type: String, required: true },
    profileImage: { type: String, default: '' },
    followers: [
      { type: mongoose.Schema.Types.ObjectId, ref: 'User', default: [] },
    ],
    following: [
      { type: mongoose.Schema.Types.ObjectId, ref: 'User', default: [] },
    ],
    followersCount: { type: Number, default: 0 },
    followingCount: { type: Number, default: 0 },
  },
  {
    timestamps: true,
  }
);

const UserModel = mongoose.model.User || mongoose.model('User', userSchema);

export default UserModel;
