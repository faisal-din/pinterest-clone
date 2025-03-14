import express from 'express';

import { loginUser, registerUser } from '../controllers/userController.js';

const userRouter = express.Router();

// /api/user/login
userRouter.post('/login', loginUser);

// /api/user/register
userRouter.post('/register', registerUser);

export default userRouter;
