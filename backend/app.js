import express from 'express';
import userRouter from './router/user.js'

export const app = express();
app.use(express.json());
app.use(userRouter);

// app.use('/api/v1/',urlrouter);