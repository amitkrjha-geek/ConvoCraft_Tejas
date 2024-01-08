import React from 'react'
import ChatHeader from './ChatHeader.js'
import ChatMessage from './ChatMessage.js'
import Input from './Input.js'

const RightPannel = () => {
    return (
    <div className="w-2/3 border flex flex-col">
            <ChatHeader />
            <ChatMessage />
            <Input/>
            
    </div>
    )
}

export default RightPannel