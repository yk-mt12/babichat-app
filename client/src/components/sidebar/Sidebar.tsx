import React from 'react'
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
      <SidebarOption Icon={HomeIcon} text='Post' />
      <SidebarOption Icon={HomeIcon} text='Message' />
      <SidebarOption Icon={HomeIcon} text='Ranking' />

      <SidebarOption Icon={HomeIcon} text='Setting' />
    </div>
  )
}

export default Sidebar
