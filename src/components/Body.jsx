import React from 'react'
import Sidebar from './Sidebar'
import MainContainer from './MainContainer'
import { Outlet } from 'react-router-dom'

const Body = () => {
  return (
 //  <div className='flex'><Sidebar/>
 // <Outlet/>
 //   </div>  
    <div className="flex flex-col md:flex-row">
  <div className="md:w-1/5 w-full">
    <Sidebar />
  </div>
  <div className="md:w-4/5 w-full">
    <Outlet />
  </div>
</div>

  )
}

export default Body
