import  express  from 'express';
const router = express.Router();
import { fetchChats, accessChat, renameGroup, removeFromGroup, addToGroup, createGroupChat } from '../controller/chat.js';
import auth from '../middleware/auth.js';
//get the all the chat for particular user
router.route("/hello").get((req, res) => {
    res.status(200).send("Hello from chat api");
})
router.route("/").get(auth,fetchChats);


// access and post the chats
router.route("/").post(auth,accessChat);


// create a group
router.route("/group").post(auth,createGroupChat);

//rename a group
router.route("/renameGroup").put(auth,renameGroup);


//remove a user from created group
router.route("/removeFromGroup").put(auth,removeFromGroup);

//add to the group
router.route("/addToGroup").put(auth,addToGroup);

export default router;