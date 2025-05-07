import { v2 as cloudinary } from 'cloudinary';
import { config } from 'dotenv';
import fs from 'fs';

config(); // Load environment variables

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Function to upload file to Cloudinary
const uploadToCloudinary = async (filePath) => {
  try {
    if (!filePath) return null; // Check if filePath is provided

    // Upload file to Cloudinary
    const result = await cloudinary.uploader.upload(filePath, {
      folder: 'pinterest_clone', // Cloudinary folder
      use_filename: true,
    });

    // Delete file from local storage after upload
    fs.unlinkSync(filePath);

    return result.secure_url; // Return Cloudinary URL
  } catch (error) {
    throw new Error('Cloudinary Upload Failed');
  }
};

export { uploadToCloudinary };

// This file configures Cloudinary and Multer for file uploads. It also provides a function to upload files to Cloudinary and delete them from local storage after upload.
//
// The cloudinary.config method is used to set up the Cloudinary client with the required credentials from the environment variables.
//
// The Multer configuration specifies the destination folder for storing temporary files and the filename format for uploaded files.
//
// The uploadToCloudinary function uploads a file to Cloudinary using the cloudinary.uploader.upload method. It then deletes the file from local storage using fs.unlinkSync.
//
// The upload function is exported for use in the application's routes.
//
// This file is used in the pinController.js file to upload images to Cloudinary when creating a new pin.
//
// The cloudinary.js file is located in the Backend/config directory.
//
