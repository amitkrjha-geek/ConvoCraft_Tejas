import { app } from './app.js';
import dbConnect from './database/connectDb.js';
import dotenv from 'dotenv'

//import { PORT } from './config.js';
dotenv.config();
dbConnect();
const PORT = process.env.PORT;
app.listen(PORT, ()=>{
    console.log(`Server is running on ${PORT}`)
});