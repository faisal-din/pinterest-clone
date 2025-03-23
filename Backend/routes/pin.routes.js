import express from 'express';
const pinRouter = express.Router();
import isAuthenticated from '../middlewares/auth.middleware.js';
import { upload } from '../middlewares/multer.middleware.js';
import {
  createPin,
  deletePin,
  getAllPins,
  getSinglePin,
  updatePin,
} from '../controllers/pin.controller.js';

pinRouter.get('/', isAuthenticated, getAllPins);

pinRouter.get('/:id', isAuthenticated, getSinglePin);

pinRouter.post('/create', isAuthenticated, upload.single('image'), createPin);

pinRouter.put('/:id', isAuthenticated, updatePin);

pinRouter.delete('/:id', isAuthenticated, deletePin);

export default pinRouter;
