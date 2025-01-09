import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { FaHome, FaUserCircle,FaHistory, FaShoppingBag,FaMusic, FaTrophy ,FaChalkboard,FaTshirt,FaPodcast } from "react-icons/fa";
import { SiYoutubeshorts,SiTether,SiYoutubegaming } from "react-icons/si";
import { MdSubscriptions,MdTrendingUp,MdNewspaper  } from "react-icons/md";
import { PiFilmSlateFill } from "react-icons/pi";

const Sidebar = () => {
  //useselector take what you are subscribing
  const isMenuOpen=useSelector(store => store.app.isMenuOpen);
  //early return
  if(!isMenuOpen) return null;
  return (
    <div className='p-3 shadow-lg w-48'>
      <h1 className='font-bold '>Subscriptions</h1>
      <ul className='my-4'>
        <Link to="/"><li className='flex hover:bg-gray-300'><FaHome className=' mx-3 ' size={24} /><span className='text-lg'>Home</span></li></Link>
        <li className='flex my-2 hover:bg-gray-300'><SiYoutubeshorts  className=' mx-3' size={24} /><span className='text-lg'>Shorts</span></li>
        <li className='flex my-2 hover:bg-gray-300'><MdSubscriptions  className=' mx-3' size={24} /><span className='text-lg'>Subscription</span></li> 
        </ul>
        <hr className='h-[2px] my-5 bg-black'/>
        <ul>
        <li className='flex my-2 hover:bg-gray-300'><FaUserCircle  className=' mx-3' size={24} /><span className='text-lg'>You</span></li>
        <li className='flex my-2 hover:bg-gray-300'>  <FaHistory  className=' mx-3' size={24} /><span className='text-lg'>History</span></li>
        </ul>
        <hr className='h-[3px] my-5 bg-black'/>
        <h1 className='font-bold text-2xl'>Explore</h1>
      <ul className='my-4'>
        <li className='flex my-2 hover:bg-gray-300'><MdTrendingUp  className=' mx-3' size={24} /><span className='text-lg'>Trending</span></li>
        <li className='flex my-2 hover:bg-gray-300'><FaShoppingBag  className=' mx-3' size={24} /><span className='text-lg'>Shopping</span></li>
        <li className='flex my-2 hover:bg-gray-300'><FaMusic  className=' mx-3' size={24} /><span className='text-lg'>Music</span></li>
        <li className='flex my-2 hover:bg-gray-300'><PiFilmSlateFill  className=' mx-3' size={24} /><span className='text-lg'>Films</span></li>
        <li className='flex my-2 hover:bg-gray-300'><SiTether  className=' mx-3' size={24} /><span className='text-lg'>Live</span></li>
        <li className='flex my-2 hover:bg-gray-300'><SiYoutubegaming  className=' mx-3' size={24} /><span className='text-lg'>Gaming</span></li>
        <li className='flex my-2 hover:bg-gray-300'><MdNewspaper  className=' mx-3' size={24} /><span className='text-lg'>News</span></li>
        <li className='flex my-2 hover:bg-gray-300'><FaTrophy className=' mx-3' size={24}  /><span className='text-lg'>Sports</span></li>
        <li className='flex my-2 hover:bg-gray-300'><FaChalkboard className=' mx-3'  /><span className='text-lg'>Courses</span></li>
        <li className='flex my-2 hover:bg-gray-300'><FaTshirt  className=' mx-3' /><span className='text-lg'>Fashion </span></li>
        <li className='flex my-2 hover:bg-gray-300'><FaPodcast  className=' mx-3' /><span className='text-lg'>Podcasts</span></li>
        </ul>
       
    </div>
  )
}

export default Sidebar
