import mongoose from "mongoose";
const dbConnect=()=>{
mongoose.connect("mongodb+srv://ankurshuklamet19:uIqk7UOCd05L6njD@cluster0.j1evqjb.mongodb.net/?retryWrites=true&w=majority",{
    dbname:'ConvoCraft_Tejas',
}).then(()=>{
    console.log("Database connected")
}).catch((err)=>{
console.log(err);
});
};
export default dbConnect;