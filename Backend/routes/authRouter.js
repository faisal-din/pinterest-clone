import express from 'express';
const userRouter = express.Router();

import isAuthenticated from '../middlewares/authMiddleware.js';

import {
  getAllUsers,
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

// /api/auth/users
userRouter.get('/users', getAllUsers);

// /api/auth/:id
userRouter.get('/:id', isAuthenticated, getCurrentUser);

export default userRouter;
