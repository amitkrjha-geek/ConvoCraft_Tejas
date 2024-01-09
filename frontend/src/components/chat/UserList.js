import React from "react";
import UserTile from "./UserTile";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const UserList = () => {

  
//   console.log(data, 1);
//   const individual = data?.filter((d,i) => {return d.isGroupChat===false});
//   console.log(individual)
  
 const data = useSelector((store) => store.chat.chatDetails);  
    

  return (
    <div>
      {data?.map((d) => (
        <UserTile className="bg-grey-lighter flex-1 overflow-auto" data={d} />
      ))}
    </div>
  );
};

export default UserList;
