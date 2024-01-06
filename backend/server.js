import { app } from './app.js';
import dbConnect from './database/connectDb.js';
import { PORT } from './config.js';
dbConnect();
app.listen(PORT, ()=>{
    console.log(`Server is running on ${PORT}`)
});