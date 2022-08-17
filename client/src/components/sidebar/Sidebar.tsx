import React from 'react'
import { Navigate } from 'react-router-dom'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import HomeIcon from '@mui/icons-material/Home'
import SidebarOption from './SidebarOption'
import './Sidebar.css'

const Sidebar = () => {
  return (
    <div className='sidebar'>
      {/* {アイコン} */}
      <AccountCircleIcon className='sidebar-option' />
      <h2>Name</h2>

      <SidebarOption Icon={HomeIcon} text='Home' />
      <SidebarOption Icon={HomeIcon} text='Post' navigate='post' />
      <SidebarOption Icon={HomeIcon} text='Message' navigate='message' />
      <SidebarOption Icon={HomeIcon} text='Ranking' navigate='ranking' />

      <SidebarOption Icon={HomeIcon} text='Setting' navigate='setting' />
    </div>
  )
}

export default Sidebar
