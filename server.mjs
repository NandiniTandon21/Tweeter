import { createUser, loginUser } from './user.controller.mjs';
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import userRoutes from './routes/user.routes.mjs';
import authRoutes from './routes/auth.routes.mjs';
import tweetRoutes from './routes/tweet.routes.mjs';



dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/tweets', tweetRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});