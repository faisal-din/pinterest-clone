import UserModel from '../models/userModel.js';
import validator from 'validator';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { uploadToCloudinary } from '../config/cloudinary.js';

// Route for user registration/sign-up  --> (POST) /api/auth/register
export const registerUser = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;

    // Check if the user already exists
    const userExists = await UserModel.findOne({ email });

    if (userExists) {
      return res
        .status(400)
        .json({ success: false, message: 'User already exists' });
    }

    // validating email format & strong password
    if (!validator.isEmail(email)) {
      return res
        .status(400)
        .json({ success: false, message: 'Please enter a valid email' });
    }

    if (password.length < 6) {
      return res.status(400).json({
        success: false,
        message: 'Password should be at least 6 characters',
      });
    }

    // Hashing the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = new UserModel({
      name,
      email,
      password: hashedPassword,
    });

    await user.save();

    // Create JWT token
    const token = jwt.sign(
      { id: user._id, email: user.email },
      process.env.JWT_SECRET,
      {
        expiresIn: process.env.JWT_EXPIRE,
      }
    );

    // Send the token in a HTTP-only cookie
    res.cookie('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'strict',
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    });

    // Send the response
    res.status(201).json({
      success: true,
      message: 'User created successfully',
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: error.message,
    });
    next(error);
  }
};

// Route for user login  --> (POST) /api/auth/login
export const loginUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .json({ success: false, message: 'Email and password are required' });
    }

    // Check if the user exists
    const user = await UserModel.findOne({ email });

    if (!user) {
      return res
        .status(400)
        .json({ success: false, message: 'User doesn`t exist ' });
    }

    // Check if the password is correct
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res
        .status(400)
        .json({ success: false, message: 'Invalid credentials' });
    }

    // Create JWT token
    const token = jwt.sign(
      { id: user._id, email: user.email },
      process.env.JWT_SECRET,
      {
        expiresIn: process.env.JWT_EXPIRE,
      }
    );

    // Send the token in a HTTP-only cookie
    res.cookie('token', token, {
      httpOnly: true,
      secure: true, // Always use secure for deployed apps
      sameSite: 'none', // Use 'none' for cross-origin requests
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    });

    // Send the response
    res.status(200).json({
      success: true,
      message: 'User logged in successfully',
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
    next(error);
  }
};

// Route for user logout  --> (POST) /api/auth/logout
export const logoutUser = async (req, res, next) => {
  try {
    res.clearCookie('token', {
      httpOnly: true,
      secure: true, // Always use secure for deployed apps
      sameSite: 'none', // Use 'none' for cross-origin requests
    });

    res.status(200).json({ success: true, message: 'User logged out' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
    next(error);
  }
};

// Route for all user profile
export const getAllUsers = async (req, res, next) => {
  try {
    const users = await UserModel.find();

    if (!users) {
      return res.status(404).json({
        success: false,
        message: 'Users not found',
      });
    }

    res.status(200).json({
      success: true,
      users,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Route to get current or logged user profile --> (GET) /api/auth/me
export const getCurrentUser = async (req, res, next) => {
  try {
    const user = await UserModel.findById(req.user.id)
      .select('-password')
      .populate('followers', 'name')
      .populate('following', 'name');

    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'User not found',
      });
    }

    res.status(200).json({
      success: true,
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Route to get user profile by ID --> (GET) /api/auth/user/:id
export const getUserById = async (req, res, next) => {
  try {
    const userId = req.params.id; // Get the user ID from the request parameters

    const user = await UserModel.findById(userId).select('-password');

    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'User not found',
      });
    }

    res.status(200).json({
      success: true,
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Route to update current user profile --> (PuT) /api/auth/profile
export const updateMyProfile = async (req, res, next) => {
  try {
    const userId = req.user._id;

    const { name, bio, username } = req.body;
    let updatedFields = { name, bio, username };

    if (req.file) {
      // Upload new image to Cloudinary
      const imageUrl = await uploadToCloudinary(
        req.file.buffer,
        req.file.originalname
      );
      updatedFields.profileImage = imageUrl;
    }

    const updatedUser = await UserModel.findByIdAndUpdate(
      userId,
      updatedFields,
      {
        new: true,
        runValidators: true,
      }
    );

    res.status(200).json({
      success: true,
      message: 'Pin updated successfully',
      user: updatedUser,
    });
  } catch (error) {
    console.log('Error updating user profile', error);
    res.status(500).json({
      success: false,
      message: error.message,
    });
    next(error);
  }
};

// Route to follow and unfollow a user by ID  --> (PUT) /api/auth/follow/:id
export const followUser = async (req, res, next) => {
  try {
    const userId = req.params.id;
    const currentUserId = req.user._id;

    if (userId === currentUserId.toString()) {
      return res.status(400).json({
        success: false,
        message: 'You cannot follow yourself',
      });
    }

    const userToFollow = await UserModel.findById(userId);
    const currentUser = await UserModel.findById(currentUserId);

    if (!userToFollow || !currentUser) {
      return res.status(404).json({
        success: false,
        message: 'User not found',
      });
    }

    const isFollowing = currentUser.following.includes(userId);

    if (isFollowing) {
      // Unfollow logic
      currentUser.following.pull(userId);
      currentUser.followingCount = Math.max(0, currentUser.followingCount - 1);

      userToFollow.followers.pull(currentUserId);
      userToFollow.followersCount = Math.max(
        0,
        userToFollow.followersCount - 1
      );
    } else {
      // Follow logic
      currentUser.following.push(userId);
      currentUser.followingCount += 1;

      userToFollow.followers.push(currentUserId);
      userToFollow.followersCount += 1;
    }

    await currentUser.save();
    await userToFollow.save();

    res.status(200).json({
      success: true,
      message: isFollowing ? 'Unfollowed user' : 'Followed user',
      user: currentUser,
    });
  } catch (error) {
    console.error('Error in follow/unfollow user:', error);
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
