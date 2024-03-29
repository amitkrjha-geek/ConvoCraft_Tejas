import express from 'express';
import userRouter from './router/user.js'
import chatRouter from './router/chatRoutes.js'
import messageRouter from './router/messageRoutes.js'
import cors from 'cors'
export const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/v1/chats", chatRouter);
app.use('/api/v1', userRouter);
app.use('/api/v1/message', messageRouter);

// app.use('/api/v1/',urlrouter);