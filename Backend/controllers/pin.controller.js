import PinModel from '../models/pinModel.js';
import CommentModel from '../models/comment.model.js';
import { uploadToCloudinary } from '../config/cloudinary.js';
import { upload } from '../middlewares/multer.middleware.js';

// Rooute for create pin  --> (POST) /api/pins/create
export const createPin = async (req, res, next) => {
  try {
    // Check if an image was uploaded
    if (!req.file) {
      return res.status(400).json({ message: 'Image is required' });
    }

    const fileBuffer = req.file.buffer;
    const fileName = req.file.originalname;

    // Upload image buffer to Cloudinary
    const imageUrl = await uploadToCloudinary(fileBuffer, fileName);

    // Extract pin data from request body
    const { title, description, category } = req.body;

    // Create new pin with Cloudinary image URL
    const newPin = new PinModel({
      title,
      description,
      category,
      image: imageUrl, // Store the Cloudinary URL, not local file path
      owner: req.user._id, // Assuming authentication middleware provides user
    });

    // Save the pin to database
    const savedPin = await newPin.save();

    res.status(201).json({
      success: true,
      message: 'Pin created successfully',
      savedPin,
    });
  } catch (error) {
    console.error('Error creating pin:', error);
    res.status(500).json({
      success: false,
      message: error.message,
    });
    next(error);
  }
};

// Route for getting all pins --> (GET) /api/pins
export const getAllPins = async (req, res, next) => {
  try {
    const pins = await PinModel.find()
      .populate('owner', 'name')
      .populate({
        path: 'comments',
        populate: {
          path: 'owner',
          select: 'name', // Only fetch the fields you need
        },
      });

    if (!pins) {
      return res.status(404).json({
        success: false,
        message: 'Pins not found',
      });
    }

    res.status(200).json({
      success: true,
      pins,
    });
  } catch (error) {
    console.log('Error fetching all pins:', error);
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Route for getting a single pin --> (GET) /api/pins/:id
export const getSinglePin = async (req, res, next) => {
  try {
    const pin = await PinModel.findById(req.params.id)
      .populate('owner', 'name followers')
      .populate({
        path: 'comments',
        populate: {
          path: 'owner',
          select: 'name', // Only fetch the fields you need
        },
      });

    if (!pin) {
      return res.status(404).json({
        success: false,
        message: 'Pin not found',
      });
    }

    res.status(200).json({
      success: true,
      pin,
    });
  } catch (error) {
    console.log('Error fetching pins by given id', error);
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Route for deleting a pin --> (DELETE) /api/pins/:id
export const deletePin = async (req, res, next) => {
  try {
    const { id } = req.params; // Assuming you get the pin ID from URL params

    // Find the pin first to make sure it exists
    const pin = await PinModel.findById(id);
    if (!pin) {
      return res.status(404).json({ message: 'Pin not found' });
    }

    // Delete all comments associated with this pin
    await CommentModel.deleteMany({ pin: id });

    // Now delete the pin
    await PinModel.findByIdAndDelete(id);

    res.status(200).json({
      success: true,
      message: 'Pin deleted',
    });
  } catch (error) {
    console.log('Error deleting pin...', error);
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Route for updating a pin --> (PUT) /api/pins/:id
export const updatePin = async (req, res, next) => {
  try {
    let pin = await PinModel.findById(req.params.id);

    if (!pin) {
      return res.status(404).json({
        success: false,
        message: 'Pin not found',
      });
    }

    if (req.file) {
      // If a new image is uploaded, upload it to Cloudinary
      const imageUrl = await uploadToCloudinary(
        req.file.buffer,
        req.file.originalname
      );
      req.body.image = imageUrl; // Update the image URL in the request body
    }

    pin = await PinModel.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    res.status(200).json({
      success: true,
      message: 'Pin updated successfully',
      pin,
    });
  } catch (error) {
    console.log('Error updating pin..', error);
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Route for liking and unliking a pin --> (PUT) /api/pins/:id/toggleLike
export const likePin = async (req, res, next) => {
  try {
    const pin = await PinModel.findById(req.params.id);
    const userId = req.user._id; // Assuming you have authentication

    if (!pin) {
      return res.status(404).json({
        success: false,
        message: 'Pin not found',
      });
    }

    // Check if user already liked this pin
    const userIndex = pin.likedBy.indexOf(userId);

    if (userIndex === -1) {
      // User hasn't liked the pin yet, so add like
      pin.likes += 1;
      pin.likedBy.push(userId);
    } else {
      // User already liked the pin, so remove like
      pin.likes = Math.max(0, pin.likes - 1);
      pin.likedBy.splice(userIndex, 1);
    }

    await pin.save();

    res.status(200).json({
      success: true,
      message:
        userIndex === -1
          ? 'Pin liked successfully'
          : 'Pin unliked successfully',
      pin,
      liked: userIndex === -1, // Tell the frontend if the pin is now liked or unliked
    });
  } catch (error) {
    console.log('Error liking pin...', error);
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
