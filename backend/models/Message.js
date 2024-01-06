import mongoose from "mongoose";
import User from "./User";
import Chat from "./Chat";

const messageSchema = new mongoose.Schema({
    sender: { type: mongoose.Schema.ObjectId, ref: User },
    contentType: { type: String, trim: true },
    content: { type: string, trim: true },
    chat: { type: mongoose.Schema.ObjectId, ref: Chat },
    reciever: [{ type: mongoose.Schema.ObjectId, ref: User }],
    
},
    {
        timestamps: true
    }
);
export default mongoose.model('Message', messageSchema);