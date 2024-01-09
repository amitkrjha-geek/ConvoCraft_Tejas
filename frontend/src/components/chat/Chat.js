import React from 'react'
import LeftPannel from './LeftPannel.js'
import RightPannel from './RightPannel.js'
import ResponsiveAppBar from '../Header.js'
const Chat = () => {
  
  return (
    <div class=" h-screen">
      {/* <Header/> */}
      <ResponsiveAppBar/>
      <div class="flex border border-grey rounded shadow-lg h-full">
        <LeftPannel />
        <RightPannel />
      </div>
    </div>
  )
}

export default Chat