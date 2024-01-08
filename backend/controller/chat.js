import asyncHandler from 'express-async-handler';
import Chat from '../models/Chat.js'
import User from '../models/user.js';
// fetch single chat or create a chat with requested user
export const accessChat = asyncHandler(async (req, res) => {
    
    const { userId } = req.body;
    console.log(userId);
    console.log(req.user._id);
    if (!userId) {
        
        return res.sendStatus(400);
    }
    var isChat = await Chat.find({
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
        select:"name profileImageUrl email",
    })
    if (isChat.length > 0) {
        res.send(isChat[0]);
    }
    else
    {
        var chatData = {
            chatName: "sender",
            isGroupChat: false,
            users: [req.user._id, userId],
        };
    }
    try {
        // console.log(4)
        const createdChat = await Chat.create(chatData);
        const FullChat = await Chat.findById(createdChat._id)
            .populate("users", "-password");
        res.status(200).json(FullChat);
    }
    catch (error) {
        // console.log(3)
        res.status(400);
        throw new Error(error.message);
    }
});

// get all the chats for particular user
export const fetchChats = asyncHandler(async (req, res) => {
    try {
        Chat.find({ users: { $elemMatch: { $eq: req.user._id } } })
            .populate("users", "-password")
            .populate("groupAdmin", "-password")
            .populate("latestMessage")
            .sort({ updatedAr: -1 })
            .then(async (results) => {
                results = await User.populate(results, {
                    path: "latestMessage.sender",
                    select: "name profileImageUrl email",
                });
                res.status(200).send(results);
            });
            
            
    }
    catch (error) {
        res.status(400);
        throw new Error(error.message)
    }
});
// create a new group chat
export const createGroupChat = asyncHandler(async (req, res) => {
    if (!req.body.users || !req.body.name) {
        return res.status(400).send({ message: "Please provide the group name and add the users" });
    }
    var users = JSON.parse(req.body.users);
    if (users.length < 2) {
        return res
            .status(400)
            .send({ message: "Number of users should be more than 2" });
    }
    users.push(req.user);
    try {
        const groupChat = await Chat.create({
            chatName: req.body.name,
            users: users,
            isGroupChat: true,
            imageUrl: req.body.imageUrl,
            groupAdmin: req.user,
        })

        const fullGroupChat = await Chat.findOne({ _id: groupChat._id })
            .populate("users", "-password")
            .populate("groupAdmin", "-password");

        res.status(200).json(fullGroupChat);
        

    }
    
    catch (error) {
        res.status(400);
        throw new Error(error.message);
    }
})

//rename the group

export const renameGroup = asyncHandler(async (req, res) => {
    const { chatId, chatName } = req.body;
    
    if (!chatName) res.status(400).send("Group name can't be enpty");
    
    const updateChat = await Chat.findOneAndUpdate(
        { _id: chatId },
        {$set:{
        chatName: chatName
    }},
        {
            new: true
        }
    ).populate("users", "-password")
        .populate("groupAdmin", "-password");
    //console.log(updateChat);
    if (!updateChat)
    {
        res.status(400).send("Chat not found");
    }
    else
    {
        res.json(updateChat);
    }
})

// remove from a group
export const removeFromGroup = asyncHandler(async (req, res) => {
  const { chatId, userId } = req.body;

  // check if the requester is admin

  const removed = await Chat.findByIdAndUpdate(
    chatId,
    {
      $pull: { users: userId },
    },
    {
      new: true,
    }
  )
    .populate("users", "-password")
    .populate("groupAdmin", "-password");

  if (!removed) {
    res.status(404);
    throw new Error("Chat Not Found");
  } else {
    res.json(removed);
  }
});

// add user to group or user can leave from any group
export const addToGroup = asyncHandler(async (req, res) => {
  const { chatId, userId } = req.body;

  // check if the requester is admin

  const added = await Chat.findByIdAndUpdate(
    chatId,
    {
      $push: { users: userId },
    },
    {
      new: true,
    }
  )
    .populate("users", "-password")
    .populate("groupAdmin", "-password");

  if (!added) {
    res.status(404);
    throw new Error("Chat Not Found");
  } else {
    res.json(added);
  }
});
