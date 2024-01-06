import mongoose from "mongoose";
const dbConnect=()=>{
mongoose.connect("mongodb+srv://ankurshuklamet19:AhgL2uJtIzV31AKd@cluster0.yjr8v49.mongodb.net/?retryWrites=true&w=majority",{
    dbname:'ConvoCraft_Tejas',
}).then(()=>{
    console.log("Database connected")
}).catch((err)=>{
console.log(err);
});
};
export default dbConnect;