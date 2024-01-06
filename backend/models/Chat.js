import mongoose from "mongoose";
import User from "./User";
import Message from "./Message";

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