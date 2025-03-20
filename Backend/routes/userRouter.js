import express from 'express';
const userRouter = express.Router();
import { loginUser, registerUser } from '../controllers/userController.js';

// /api/user/login
userRouter.post('/login', loginUser);

// /api/user/register
userRouter.post('/register', registerUser);

export default userRouter;
