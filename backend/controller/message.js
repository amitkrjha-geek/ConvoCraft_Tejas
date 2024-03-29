import asyncHandler from "express-async-handler";
import Message from "../models/Message.js";
import User from "../models/Message.js";
import Chat from "../models/Chat.js";

// get all the messages for chatId
export const allMessages = asyncHandler(async (req, res) => {
    try {
        const messages = await Message.find({ chat: req.params.chatId })
          .populate("sender", "name profileImageUrl email")
          .populate("chat");
        res.json(messages);
    }
    catch (error)
    {
        res.status("400");
        throw new Error(error.message);
    }
})

export const sendMessage = asyncHandler(async (req, res) => {
    const { content, chatId,contentType } = req.body;

    if (!content || !chatId) {
      // console.log("Invalid data passed into request");
      return res.sendStatus(400);
    }

    var newMessage = {
      sender: req.user._id,
      content: content,
      contentType:contentType,
      chat: chatId,
    };

    try {
      var message = await Message.create(newMessage);

      message = await message.populate("sender", "name profileImageUrl");
      message = await message.populate("chat");
      message = await User.populate(message, {
        path: "chat.users",
        select: "name profileImageUrl email",
      });

      await Chat.findByIdAndUpdate(req.body.chatId, { latestMessage: message });

      res.json(message);
    } catch (error) {
      res.status(400);
      throw new Error(error.message);
    }
})
