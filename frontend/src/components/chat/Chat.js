import React from "react";
import LeftPannel from "./LeftPannel.js";
import RightPannel from "./RightPannel.js";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../../utils/userSlice.js";
import axios from "axios";
import { useEffect } from "react";
import { useChat } from "../Hooks/useChats.js";
import ResponsiveAppBar from "../Header.js";
const Chat = () => {
  const dispatch = useDispatch();
  const user=useSelector((store)=> store.user);
  useChat();
  
  return (
    <div class=" h-screen">
      <ResponsiveAppBar />
      <div class="flex border border-grey rounded shadow-lg h-full">
        <LeftPannel />
        <img style={{width:"100%"}} src="https://img.freepik.com/free-vector/chat-bubble-with-motivational-quotation_1017-6927.jpg?w=740&t=st=1704797617~exp=1704798217~hmac=e0f9dc64eb1a6b5e085d44339415092e7ee11ca98b1eb4aeefc75b78e22ce482" />
      </div>
    </div>
  );
};

export default Chat;
