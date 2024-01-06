import mongoose from "mongoose";
import User from "./user.js";
import Message from "./Message.js";

const chatSchema = new mongoose.Schema({
    chatName: { type: String, trim: true },
    isGroupChat: { type: Boolean, default: false },
    users: [{ type: mongoose.Schema.ObjectId, ref: User }],
    latestMessage: { type: mongoose.Schema.ObjectId, ref: Message},
    groupAdmin: { type: mongoose.Schema.ObjectId, ref: User },
    
},
    {
        timestamps: true,
    }
);

export default mongoose.model("Chat", chatSchema);