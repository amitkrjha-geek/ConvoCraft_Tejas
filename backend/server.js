import { app } from './app.js';
import dbConnect from './database/connectDb.js';
//import { PORT } from './config.js';
const PORT = 5000;
dbConnect();
app.listen(PORT, ()=>{
    console.log(`Server is running on ${PORT}`)
});