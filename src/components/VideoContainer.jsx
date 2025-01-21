import React, { useEffect, useState } from 'react'
import { YOUTUBE_VIDEOS_API } from '../utils/constants';
import VideoCard from './VideoCard';
import { Link  } from 'react-router-dom';
import Shimer from './Shimer';
import Spiner from "../assets/img/spiner.gif";
const VideoContainer = () => {
  const[videos,setVideos]=useState([]);
  const[page,setPage]=useState(9);
  const[loading,setLoading]=useState(true);
  useEffect(()=> {
    getVideos();
  },[page]);
  const apiKey=import.meta.env.VITE_API_KEY
  const getVideos=async()=>{

       const data=await fetch(YOUTUBE_VIDEOS_API+page+"&regionCode=IN&key="+apiKey);
       const response= await data.json();        
      setVideos(response.items); 
      setLoading(false);  
  }
  const handleScroll=()=>{
   if(window.innerHeight +document.documentElement.scrollTop+1>=document.documentElement.scrollHeight){
    setLoading(true);
    setPage((prev) => prev+3);
   }
  }
  //infinite scroll
  useEffect(()=>{
    window.addEventListener("scroll",handleScroll);
    return ()=> window.removeEventListener("scroll",handleScroll)
  },[])
  if(videos?.length ===0){
    return <div><Shimer/></div>;
  }
  return (<>
 
    <div className='flex flex-wrap'>      
     {videos.map(video => (     
       <Link  key={video.id} to={"/watch?v="+video.id}><VideoCard info={video}/> </Link>     
     ))}
    </div>
    {loading && 
    <div className='flex justify-center'>
    <img  src={Spiner} alt="spiner" /></div>}
    
    </>

  )
}

export default VideoContainer;
