import React from 'react'
import { Navigate } from 'react-router-dom'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import HomeIcon from '@mui/icons-material/Home'
import AssignmentIcon from '@mui/icons-material/Assignment';
import ForumIcon from '@mui/icons-material/Forum';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import SettingsIcon from '@mui/icons-material/Settings';
import SidebarOption from './SidebarOption'
import './Sidebar.css'

const Sidebar = () => {
  return (
    <div className='sidebar'>
      {/* {アイコン} */}
      <AccountCircleIcon className='sidebar-option' />
      <h2>Name</h2>

      <SidebarOption Icon={HomeIcon} text='Home' />
      <SidebarOption Icon={AssignmentIcon} text='Post' />
      <SidebarOption Icon={ForumIcon} text='Message' />
      <SidebarOption Icon={QueryStatsIcon} text='Ranking' />

      <SidebarOption Icon={SettingsIcon} text='Setting' />
    </div>
  )
}

export default Sidebar
