import express from 'express';
const userRouter = express.Router();

import isAuthenticated from '../middlewares/authMiddleware.js';

import {
  getCurrentUser,
  loginUser,
  logoutUser,
  registerUser,
} from '../controllers/authController.js';

// /api/auth/register
userRouter.post('/register', registerUser);

// /api/auth/login
userRouter.post('/login', loginUser);

// /api/auth/logout
userRouter.post('/logout', logoutUser);

// /api/auth/user
userRouter.get('/user', isAuthenticated, getCurrentUser);

export default userRouter;
