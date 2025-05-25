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
const uploadToCloudinary = (buffer, filename) => {
  try {
    // Validate input
    if (!buffer || !filename) return null;

    return new Promise((resolve, reject) => {
      cloudinary.uploader
        .upload_stream(
          {
            resource_type: 'auto', // Automatically detect resource type (image, video, etc.)
            public_id: filename, // Use original filename as public ID
            folder: 'pinterest_clone', // Optional: specify a folder in Cloudinary
          },
          (error, result) => {
            if (error) {
              console.error('Cloudinary upload error:', error.message);
              return reject(error);
            }
            resolve(result.secure_url); // Return the secure URL of the uploaded file
          }
        )
        .end(buffer); // End the stream with the file buffer
    });
  } catch (error) {
    console.error('Error in uploadToCloudinary:', error);
    throw new Error('Failed to upload to Cloudinary');
  }
};

export { uploadToCloudinary };
