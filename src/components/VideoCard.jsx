import React from 'react'

const VideoCard = ({info}) => {   
    const {snippet , statistics}=info;
    const {channelTitle,title,thumbnails} = snippet;
  return (
    <div className='p-2 m-2 shadow-lg h-[380px] w-[400px] mr-9'>
      <img className='rounded-lg  w-[400px]' alt="thumnails" src={thumbnails.medium.url}/>
            <ul>
            <li className='font-bold py-2 w-[390px]'>{title}</li>
            <li>{channelTitle}</li>
            <li>{Math.floor(statistics.viewCount/1000000)}M views</li>
        </ul>      
    </div>
  )
}

export default VideoCard;
