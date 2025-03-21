import express from 'express';
const userRouter = express.Router();
import {
  loginUser,
  logoutUser,
  registerUser,
} from '../controllers/authController.js';

// /api/user/register
userRouter.post('/register', registerUser);

// /api/user/login
userRouter.post('/login', loginUser);

// /api/user/logout
userRouter.post('/logout', logoutUser);

export default userRouter;
