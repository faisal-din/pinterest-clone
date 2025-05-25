import multer from 'multer';

const storage = multer.memoryStorage(); // No disk writes

const upload = multer({
  storage,
  limits: {
    fileSize: 5 * 1024 * 1024, // 5MB limit
  },
});

export { upload };
