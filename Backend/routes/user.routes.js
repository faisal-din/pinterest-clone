import express from 'express';
const userRouter = express.Router();

import isAuthenticated from '../middlewares/auth.middleware.js';
import { upload } from '../middlewares/multer.middleware.js';

import {
  followUser,
  getAllUsers,
  getCurrentUser,
  getUserById,
  loginUser,
  logoutUser,
  registerUser,
  updateMyProfile,
} from '../controllers/user.controller.js';

// /api/auth/register
userRouter.post('/register', registerUser);

// /api/auth/login
userRouter.post('/login', loginUser);

// /api/auth/logout
userRouter.post('/logout', logoutUser);

// /api/auth/users
userRouter.get('/users', getAllUsers);

// /api/auth/me
userRouter.get('/me', isAuthenticated, getCurrentUser);

// /api/auth/user/:id
userRouter.get('/user/:id', isAuthenticated, getUserById);

userRouter.put(
  '/profile',
  isAuthenticated,
  upload.single('profileImage'),
  updateMyProfile
);

userRouter.put('/follow/:id', isAuthenticated, followUser);
export default userRouter;
