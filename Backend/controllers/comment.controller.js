import CommentModel from '../models/comment.model.js';
import PinModel from '../models/pinModel.js';

// Route for creating a comment --> (POST) /api/pins/:pinId/comments/create
export const createComment = async (req, res, next) => {
  try {
    const pinId = req.baseUrl.split('/')[3]; // This extracts "pinId" from "/api/pins/:pinId/comments"

    const pin = await PinModel.findById(pinId);

    // Check if pin exists
    if (!pin) {
      return res.status(404).json({
        success: false,
        message: 'Pin not found',
      });
    }

    const newComment = new CommentModel({
      comment: req.body.comment,
    });
    newComment.owner = req.user._id;
    pin.comments.push(newComment);
    const createdComment = await newComment.save();
    await pin.save();

    res.status(201).json({
      success: true,
      message: 'Comment created successfully',
      comment: createdComment,
    });
  } catch (error) {
    console.error('Error creating comment:', error);
    res.status(500).json({
      success: false,
      message: error.message,
    });
    next(error);
  }
};

// Route for getting all comments --> (GET) /api/comments
export const getAllComments = async (req, res, next) => {
  try {
    const comments = await CommentModel.find();

    if (!comments) {
      return res.status(404).json({
        success: false,
        message: 'Comments not found',
      });
    }

    res.status(200).json({
      success: true,
      comments,
    });
  } catch (error) {
    console.log('Error fetching all comments:', error);
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Route for getting a single comment --> (GET) /api/comments/:id
export const getSingleComment = async (req, res, next) => {
  try {
    const comment = await CommentModel.findById(req.params.id);

    if (!comment) {
      return res.status(404).json({
        success: false,
        message: 'Comment not found',
      });
    }

    res.status(200).json({
      success: true,
      comment,
    });
  } catch (error) {
    console.log('Error fetching single comment:', error);
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Route for updating a comment --> (PUT) /api/comments/:id
export const updateComment = async (req, res, next) => {
  try {
    const { comment } = req.body;

    const updatedComment = await CommentModel.findByIdAndUpdate(
      req.params.id,
      { comment },
      { new: true }
    );

    if (!updatedComment) {
      return res.status(404).json({
        success: false,
        message: 'Comment not found',
      });
    }

    res.status(200).json({
      success: true,
      message: 'Comment updated successfully',
      comment: updatedComment,
    });
  } catch (error) {
    console.log('Error updating comment:', error);
    res.status(500).json({
      success: false,
      message: error.message,
    });
    next(error);
  }
};

// Route for deleting a comment --> (DELETE) /api/comments/:id
export const deleteComment = async (req, res, next) => {
  try {
    const comment = await CommentModel.findByIdAndDelete(req.params.id);

    if (!comment) {
      return res.status(404).json({
        success: false,
        message: 'Comment not found',
      });
    }

    res.status(200).json({
      success: true,
      message: 'Comment deleted',
    });
  } catch (error) {
    console.log('Error deleting comment:', error);
    res.status(500).json({
      success: false,
      message: error.message,
    });
    next(error);
  }
};
