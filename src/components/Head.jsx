import React, { useEffect, useState } from 'react'
import Hamburger_icon from "../assets/img/Hamburger_icon.png";
import youtube_logo from "../assets/img/youtube_logo.png";
import user_icon from "../assets/img/usericon.jpg";
import search_icon from "../assets/img/search_icon.jpg"
import { useDispatch, useSelector } from 'react-redux';
import { toggleMenu } from '../utils/appSlice'; 
import { YOUTUBE_SEARCH_API } from '../utils/constants';
import { cacheResult } from '../utils/searchSlice';

const Head = () => {

  const[searchQuery,setSearchQuery]=useState("");
  const[suggestion,setSuggestion]=useState([]);
  const[showSuggestion,setShowSuggestion]=useState(false);
  //debouncing==>wew are not calling the api for every chaarcter
  const searchCache=useSelector(store => store.search);
  const dispatch=useDispatch();
    useEffect(()=>{
      const timer=setTimeout(()=> {
        if(searchCache[searchQuery]) {
          setSuggestion(searchCache[searchQuery]); 
        }
        else{
        getSearchSuggestion();        
         }
   },200);
      return ()=> {
        clearTimeout(timer);
      }
    },[searchQuery]);
    const getSearchSuggestion=async () => {  

      const data=await fetch(YOUTUBE_SEARCH_API+searchQuery);
      const json=await data.json(); 
      setSuggestion(json);
      dispatch(cacheResult({
        [searchQuery]:json,
      }))  
            
    } 
  
  const toggleMenuHandler=()=>{
    dispatch(toggleMenu());
  }
  return (
    <div className='grid grid-flow-col p-5 m-2 shadow-lg'>
        <div className='flex col-span-1 '>
            <img onClick={()=> toggleMenuHandler()}
             className="h-6 cursor-pointer" src={Hamburger_icon} alt="menu" />
           <a href='/'> <img className="h-6 mx-2" src={youtube_logo} alt="youtube-logo" /></a>
        </div>
        <div className='col-span-10 px-10 flex items-center '>
          <input  className=" w-1/2 border border-gray-400  p-2  rounded-l-full" type="text" value={searchQuery}
           onChange={(e)=> setSearchQuery(e.target.value)}
           onFocus={() => setShowSuggestion(true)}
           onBlur={() => setShowSuggestion(false)}/>
          <button className='h-10 border border-gray-400  rounded-r-full bg-gray-100 p-2'><img className='h-4 text-center'  src={search_icon} alt="" /></button>
        </div>
        {showSuggestion && <div className='absolute bg-white my-[2.7rem] mx-[17.5rem] w-[32.2rem] px-5 py-2 shadow-lg rounded-lg border border-gray-100'>
          <ul>
            {suggestion.map(s=>(
             <li key={s.show.id} className='py-2 shadow-sm flex'><img className='h-4 my-[5px] mx-[6px]'  src={search_icon} alt="" />{s.show.name}</li>
            ))}
          </ul>
        </div>}
        <div className='col-span-1'>
          <img className="h-8" src={user_icon} alt="user" />
        </div>
    </div>
  )
}

export default Head
