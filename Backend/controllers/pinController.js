import PinModel from '../models/pinModel.js';

// Route for creating a new pin  --> (POST) /api/pins
export const createPin = async (req, res, next) => {
  try {
    const { title, description } = req.body;
    if (!title || !description) {
      return res.status(400).json({
        success: false,
        message: 'Title and description are required',
      });
    }

    const newPin = new PinModel(req.body);
    req.owner = req.user._id;
    const data = await newPin.save();

    res.status(201).json({
      success: true,
      message: 'Pin created',
      data,
    });
  } catch (error) {
    console.log(error);
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
    const pins = await PinModel.find();

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
    console.log(error);
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
      .populate('comments')
      .populate('owner', '-password');
    // const pin = await PinModel.findById(req.params.id).populate('comments').populate('owner');

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
    console.log(error);
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

    if (!pin) {
      return res.status(404).json({
        success: false,
        message: 'Pin not found',
      });
    }

    res.status(200).json({
      success: true,
      message: 'Pin deleted',
    });
  } catch (error) {
    console.log(error);
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
    console.log(error);
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
