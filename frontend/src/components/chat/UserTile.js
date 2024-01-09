import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getChat } from '../../utils/chatSlice';

const UserTile = ({data}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  console.log(data);
  const backendDateString = data?.createdAt; // Example format

  // State to store the parsed date
  const [formattedDate, setFormattedDate] = useState("");

  useEffect(() => {
    // Parse the backend date string into a Date object
    const backendDate = new Date(backendDateString);

    // Format the date with AM/PM
    const options = { hour: "numeric", minute: "numeric", hour12: true };
    const formattedTime = backendDate.toLocaleTimeString("en-US", options);

    // Format the date with month, day, and year
    const formattedDate = backendDate.toLocaleDateString("en-US");

    // Combine the date and time
    const fullFormattedDate = `${formattedDate} ${formattedTime}`;

    // Update the state with the formatted date
    setFormattedDate(fullFormattedDate);
  }, [backendDateString]);
  const clickHandler=()=>{
    dispatch(getChat(data))
    navigate(`/chat/${data._id}`);
  }
  return (
    <div
      className="bg-white px-3 flex items-center hover:bg-green-300 bg-slate-100 cursor-pointer"
      onClick={clickHandler}
    >
      <div>
        <img
          className="h-12 w-12 rounded-full"
          src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=740&t=st=1704785462~exp=1704786062~hmac=a344c3d81899375f6c808c6764d8218153f476e812050d3208a00c9bae33bf35"
        />
      </div>
      <div className="ml-4 flex-1 border-b border-grey-lighter py-4">
        <div className="flex items-bottom justify-between">
          <p className="text-grey-darkest">{data?.chatName=='sender'?data?.users[1].name:data?.chatName}</p>
          <p className="text-xs text-grey-darkest">{formattedDate}</p>
        </div>
        <p className="text-grey-dark mt-1 text-sm">
          {data?.latestMessage?.content}
        </p>
      </div>
    </div>
  );
}

export default UserTile