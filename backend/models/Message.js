import mongoose from "mongoose";


const messageSchema = new mongoose.Schema({
    sender: { type: mongoose.Schema.ObjectId, ref: "User" },
    contentType: { type: String, trim: true },
    content: { type: String, trim: true },
    chat:{type:mongoose.Schema.ObjectId, ref:"Chat"},
    reciever: [{ type: mongoose.Schema.ObjectId, ref: "User" }],
    
},
    {
        timestamps: true
    }
);
export default mongoose.model('Message', messageSchema);