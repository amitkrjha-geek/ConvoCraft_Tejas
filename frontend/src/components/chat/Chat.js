import React from 'react'
import LeftPannel from './LeftPannel.js'
import RightPannel from './RightPannel.js'
const Chat = () => {
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