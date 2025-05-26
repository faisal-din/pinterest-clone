import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB from './config/mongodb.js';
import cookieParser from 'cookie-parser';
import authRouter from './routes/user.routes.js';
import pinRouter from './routes/pin.routes.js';
import commentRouter from './routes/comment.routes.js';

// App Config
const app = express();
const port = process.env.PORT || 4000;
connectDB();

// CORS configuration with multiple allowed origins
const allowedOrigins = [
  'https://pinterest-clone-phi-vert.vercel.app', // Production frontend
  'http://localhost:5173', // Local development frontend
];

const corsOptions = {
  origin: function (origin, callback) {
    // Allow requests with no origin (like mobile apps or curl requests)
    if (!origin) return callback(null, true);
    if (allowedOrigins.includes(origin)) {
      return callback(null, true);
    }
    return callback(new Error('Not allowed by CORS'));
  },
  credentials: true,
};

app.options('*', cors(corsOptions));

// Middlewares
app.use(express.json());
app.use(cookieParser());
app.use(cors(corsOptions));

// API Endpoints
app.use('/api/auth', authRouter);
app.use('/api/pins', pinRouter);
app.use('/api/pins/:pinId/comments', commentRouter);

app.get('/', (req, res) => {
  res.send('API is running');
});

// Listener
app.listen(port, () => {
  console.log(`Server running on port http://localhost:${port}`);
});
