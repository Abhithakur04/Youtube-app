import React from 'react'
import Button from './Button'
const ButtonList = () => {
  const list=["All","Gaming","Songs","Live","Cricket","Cooking","News","Cricket","Cooking","News"]
  return (
    <div className='flex'>
      {list.map((name,index) =>(
         <Button key={index} name={name}/>
      ))}
     

    </div>
  )
}

export default ButtonList
