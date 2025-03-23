import express from 'express';
const pinRouter = express.Router();

import isAuthenticated from '../middlewares/authMiddleware.js';
import {
  createPin,
  deletePin,
  getAllPins,
  getSinglePin,
  updatePin,
} from '../controllers/pinController.js';

pinRouter.get('/', isAuthenticated, getAllPins);

pinRouter.get('/:id', isAuthenticated, getSinglePin);

pinRouter.post('/create', isAuthenticated, createPin);

pinRouter.put('/:id', isAuthenticated, updatePin);

pinRouter.delete('/:id', isAuthenticated, deletePin);

export default pinRouter;
