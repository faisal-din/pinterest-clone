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

const allowedOrigins =
  process.env.NODE_ENV === 'production'
    ? ['https://pinterest-frontend-omega.vercel.app']
    : ['http://localhost:5173'];

// Middlewares
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: allowedOrigins,
    credentials: true,
  })
);

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
