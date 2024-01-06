import express from 'express';
// import urlrouter from './routes/url.js';
// import {config} from 'dotenv'
// config({
// path: "./database/config.env"});
export const app = express();
app.use(express.json());
// app.use('/api/v1/',urlrouter);