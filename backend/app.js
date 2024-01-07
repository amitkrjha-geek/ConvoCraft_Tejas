import express from 'express';
import userRouter from './router/user.js'
import chatRouter from './router/chatRoutes.js'
import messageRouter from './router/messageRoutes.js'
export const app = express();
app.use(express.json());
app.use('api/v1/user', userRouter);
app.use('api/v1/chats', chatRouter);
app.use('api/v1/message', messageRouter);

// app.use('/api/v1/',urlrouter);