import express from 'express';
const userRouter = express.Router();

import isAuthenticated from '../middlewares/auth.middleware.js';
import { upload } from '../middlewares/multer.middleware.js';

import {
  getAllUsers,
  getCurrentUser,
  loginUser,
  logoutUser,
  registerUser,
  updateUserProfile,
} from '../controllers/user.controller.js';

// /api/auth/register
userRouter.post('/register', registerUser);

// /api/auth/login
userRouter.post('/login', loginUser);

// /api/auth/logout
userRouter.post('/logout', logoutUser);

// /api/auth/users
userRouter.get('/users', getAllUsers);

// /api/auth/:id
userRouter.get('/:id', isAuthenticated, getCurrentUser);

userRouter.put(
  '/profile',
  isAuthenticated,
  upload.single('profileImage'),
  updateUserProfile
);

export default userRouter;
