import PinModel from '../models/pinModel.js';
import { uploadToCloudinary } from '../config/cloudinary.js';
import { upload } from '../middlewares/multer.middleware.js';

// Rooute for create pin  --> (POST) /api/pins/create
export const createPin = async (req, res, next) => {
  try {
    // Check if an image was uploaded
    if (!req.file) {
      return res.status(400).json({ message: 'Image is required' });
    }

    // Upload image to Cloudinary
    const imageUrl = await uploadToCloudinary(req.file.path);

    // Extract pin data from request body
    const { title, description, tags } = req.body;

    // Process tags if they were sent as a comma-separated string
    const formattedTags = tags ? tags.split(',').map((tag) => tag.trim()) : [];

    // Create new pin with Cloudinary image URL
    const newPin = new PinModel({
      title,
      description,
      image: imageUrl, // Store the Cloudinary URL, not local file path
      owner: req.user._id, // Assuming authentication middleware provides user
      tags: formattedTags,
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
      .populate('comments', 'comment');
    // .populate({
    //   path: 'comments',
    //   populate: {
    //     path: 'owner',
    //     select: 'name', // Only fetch the fields you need
    //   },
    // })

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
      .populate('owner', 'name')
      .populate('comments', 'comment owner');
    // .populate({
    //   path: 'comments',
    //   populate: {
    //     path: 'owner',
    //     select: 'name', // Only fetch the fields you need
    //   },
    // })

    // const pin = await PinModel.findById(req.params.id)
    //   .populate({
    //     path: 'comments',
    //     populate: {
    //       path: 'owner',
    //     },
    //   })
    //   .populate('owner');

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
    const pin = await PinModel.findByIdAndDelete(req.params.id);

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

    pin = await PinModel.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    res.status(200).json({
      success: true,
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
