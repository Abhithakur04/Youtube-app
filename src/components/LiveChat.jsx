import React, { useEffect, useState } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from '../utils/chatSlice';
import { generateRandomName } from '../utils/helper';
import { generateRandomMessage } from '../utils/helper';
const LiveChat = () => {
    const[liveMessage,setLiveMessage]=useState("");
    const dispatch=useDispatch();
    const chatMessage=useSelector(store => store.chat.message);
    
    useEffect(()=>{
       const i=setInterval(()=>{
         //Api polling
        
         dispatch(addMessage({
            name:generateRandomName(),
            message:generateRandomMessage(25),
         }))
       },1500);
       return ()=> clearInterval(i);
    },[])
   
    
  return (<>
    <div className='w-full h-[500px] ml-2 p-2 border border-black bg-slate-100 rounded-lg  overflow-y-scroll flex flex-col-reverse'>
        {chatMessage.map((obj,index) => {
            return   <ChatMessage key={index} name={obj.name} message={obj.message}/>
        })}
    </div>
    <form className='w-full  p-2 ml-2 border border-black rounded-lg' onSubmit={(e)=>{
        e.preventDefault();
        dispatch(addMessage({
            name:"Akshay",
            message:liveMessage,
         }))
         setLiveMessage("");
         
    }}>
        <input className='w-80 px-2' type="text" value={liveMessage} onChange={(e)=>{
            setLiveMessage(e.target.value)
        }} />
        <button className='px-2 mx-2 bg-green-100'>Send</button>
    </form>
    </>
  )
}

export default LiveChat