import express from 'express';
const pinRouter = express.Router();
import isAuthenticated from '../middlewares/authMiddleware.js';
import { upload } from '../config/cloudinary.js';
import {
  commentOnPin,
  createPin,
  deletePin,
  getAllPins,
  getSinglePin,
  updatePin,
} from '../controllers/pinController.js';

pinRouter.get('/', isAuthenticated, getAllPins);

pinRouter.get('/:id', isAuthenticated, getSinglePin);

pinRouter.post('/create', isAuthenticated, upload.single('image'), createPin);

pinRouter.put('/:id', isAuthenticated, updatePin);

pinRouter.delete('/:id', isAuthenticated, deletePin);

export default pinRouter;
