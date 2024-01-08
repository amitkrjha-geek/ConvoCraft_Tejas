import mongoose from "mongoose";


const chatSchema = new mongoose.Schema(
  {
    chatName: { type: String, trim: true },
    isGroupChat: { type: Boolean, default: false },
    imageUrl: { type: String },
    users: [{ type: mongoose.Schema.ObjectId, ref: "User" }],
    groupAdmin: { type: mongoose.Schema.ObjectId, ref: "User" },
    latestMessage: { type: mongoose.Schema.ObjectId, ref: "Message" },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Chat", chatSchema);