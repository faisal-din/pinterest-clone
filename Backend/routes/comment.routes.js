import express from 'express';
const commentRouter = express.Router({ mergeParams: true });

import isAuthenticated from '../middlewares/auth.middleware.js';

import {
  createComment,
  deleteComment,
  getAllComments,
  getSingleComment,
  updateComment,
} from '../controllers/comment.controller.js';

// /api/pins/:pinId/comments
commentRouter.get('/', isAuthenticated, getAllComments);

///api/pins/:pinId/comments/:id
commentRouter.get('/:id', isAuthenticated, getSingleComment);

// /api/pins/:pinId/comments/create
commentRouter.post('/create', isAuthenticated, createComment);

// /api/pins/:pinId/comments/:id
commentRouter.put('/:id', isAuthenticated, updateComment);

// /api/pins/:pinId/comments/:id
commentRouter.delete('/:id', isAuthenticated, deleteComment);

export default commentRouter;
