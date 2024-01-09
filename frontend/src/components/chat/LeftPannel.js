import React from 'react'
import Header from './Header.js'
import Search from './Search.js'
import UserTile from './UserTile.js'
import UserList from './UserList.js'
const LeftPannel = () => {
  return (
    <div className="w-1/3 border flex flex-col">
      {/* <Header />
      <Search /> */}
      <UserList/>
    </div>
  );
}

export default LeftPannel