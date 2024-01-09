import React from 'react'
import LeftPannel from './LeftPannel.js'
import RightPannel from './RightPannel.js'
import { useDispatch } from 'react-redux'
import { addUser } from '../../utils/userSlice.js'
import axios from 'axios'
import { useEffect } from 'react'
import { useChat } from '../Hooks/useChats.js'
const Chat = () => {
  const dispatch = useDispatch();
  useChat();
  const getUser=()=>{
    const atoken=window.localStorage.getItem('access_token');
    const config = {
                  headers: {
                      "Content-Type": "application/json",
                      Authorization: `Bearer ${atoken}`,
                  },
              };
    axios.get('http://localhost:5000/api/v1/user/',config).then((res)=>{
      console.log(res);
      const {email,phoneNumber,profileImageUrl, name, _id} = res.data[0]
      dispatch(addUser({email: email, phoneNumber: phoneNumber, profileImageUrl: profileImageUrl, name: name, id:_id}));
    })
  }
  useEffect(()=>{
    getUser()
  },[]);
  return (
    <div class=" h-screen">
      {/* <Header/> */}
      <div class="flex border border-grey rounded shadow-lg h-full">
        <LeftPannel />
        <RightPannel />
      </div>
    </div>
  )
}

export default Chat