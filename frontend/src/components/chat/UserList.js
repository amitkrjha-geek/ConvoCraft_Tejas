import React from 'react'
import UserTile from './UserTile'
import { useSelector } from 'react-redux'

const UserList = () => {
    const data=useSelector((store)=>store.chat)
  return (
      <div className="bg-grey-lighter flex-1 overflow-auto">
          <UserTile/>
      </div>
  )
}

export default UserList