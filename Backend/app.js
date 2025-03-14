import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB from './config/mongodb.js';
import userRouter from './routes/userRouter.js';

// App Config
const app = express();
const port = process.env.PORT || 4000;

// Middlewares
app.use(express.json());
app.use(cors());
connectDB();

// API Endpoints
app.use('/api/user', userRouter);

app.get('/', (req, res) => {
  res.send('API is running');
});

// Listener
app.listen(port, () => {
  console.log(`Server running on port http://localhost:${port}`);
});
