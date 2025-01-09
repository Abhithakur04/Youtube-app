import React from 'react'
import user_icon from "../assets/img/usericon.jpg";

const ChatMessage = ({name,message}) => {
  return (
    <div className='flex items-center shadow-sm p-2'>
        <img className="h-8" src={user_icon} alt="user" />
        <span className='font-bold px-2'>{name}</span>
        <span>{message}</span>
    </div>
  )
}

export default ChatMessage