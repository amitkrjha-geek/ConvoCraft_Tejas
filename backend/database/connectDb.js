import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();
const dbConnect=()=>{
mongoose.connect(process.env.DB_URL,{
    dbname:'ConvoCraft_Tejas',
}).then(()=>{
    console.log("Database connected")
}).catch((err)=>{
console.log(err);
});
};
export default dbConnect;