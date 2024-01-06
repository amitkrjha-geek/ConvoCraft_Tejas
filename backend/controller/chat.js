import asyncHandler from 'express-async-handler';
import Chat from '../models/Chat.js'
import User from '../models/user.js';
// fetch single chat or create a chat with requested user
export const accessChat = asyncHandler(async (req, res) => {
    const { userId } = req.body;
    if (!userId) {
        console.log("userId is not valid");
        return res.sendStatus(400);
    }
    let isChat = await Chat.find({
        isGroupChat: false,
        $and: [
            { users: { $elemMatch: { $eq: req.user._id } } },
            { users: { $elemMatch: { $eq: userId } } },
        ]
    })
        .populate("users", "-password")
        .populate("latestMessage");
    isChat = await User.populate(isChat, {
        path: "latestMessage.Sender",
        select:"name pic email",
    })
    if (isChat.length > 0) {
        res.send(isChat[0]);
    }
    else
    {
        let chatData = {
            chatName: "sender",
            isGroupChat: false,
            users: [req.user._id, userId],
        };
    }
    try {
        const createdChat = await Chat.create(chatData);
        const FullChat = await Chat.findone({ _id: createdChat._id })
            .populate("users", "-password");
        res.status(200).json(FullChat);
    }
    catch (error) {
        res.status(400);
        throw new Error(error.message);
    }
});

// get all the chats for particular user
export const fetchChats = asyncHandler(async (req, res) => {
    try {
        chat.find({ users: { $elemMatch: { $eq: req.user._id } } })
            .populate("users", "-password")
            .populate("groupAdmin", "-password")
            .populate("latestMessage")
            .sort({ updatedAr: -1 })
            .then(async (results) => {
                results = await User.populate(results, {
                    path: "latestMessage.sender",
                    select: "name pic email",
                });
                res.status(200).send(results);
            });
            
            
    }
    catch (error) {
        res.status(400);
        throw new Error(error.message)
    }
});

