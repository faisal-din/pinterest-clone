import UserModel from '../models/userModel.js';

// Route for user login  --> (POST) /api/user/login
export const loginUser = async (req, res) => {
  res.send('Login user');
};

// Route for user registration/sign-up  --> (POST) /api/user/register
export const registerUser = async (req, res) => {
  res.send('Register user');
};
