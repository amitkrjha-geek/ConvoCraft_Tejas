import React from 'react'
import ChatHeader from './ChatHeader.js'
import ChatMessage from './ChatMessage.js'
import Input from './Input.js'
import { useChat } from '../Hooks/useChats.js'
import { useSelector } from 'react-redux'

const RightPannel = () => {
  useChat();
  // const chatDetails=useSelector((store)=>store.chat.chatDetails);
  // console.log(chatDetails);
  const openChat=useSelector((store)=> store.chat.openChat);
  console.log(openChat);
  return (
    <div className="w-2/3 border flex flex-col">
      <ChatHeader openChat={openChat}/>
      <ChatMessage />
      <Input />
    </div>
  );
}

export default RightPannel