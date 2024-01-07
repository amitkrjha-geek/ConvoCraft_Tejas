import  express  from 'express';
const router = express.Router();
import { fetchChats,accessChat,renameGroup,removeFromGroup,addToGroup,createGroupChat } from '../controller/chat.js';
//get the all the chat for particular user
router.route("/hello").get((req, res) => {
    res.status(200).send("Hello from chat api");
})
router.route("/").get(fetchChats);


// access and post the chats
router.route("/").post(accessChat);


// create a group
router.route("/group").post(createGroupChat);

//rename a group
router.route("/renameGroup").put(renameGroup);


//remove a user from created group
router.route("/removeFromGroup").put(removeFromGroup);

//add to the group
router.route("/addToGroup").put(addToGroup);

export default router;