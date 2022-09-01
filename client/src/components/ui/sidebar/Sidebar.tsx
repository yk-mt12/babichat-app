import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import HomeIcon from '@mui/icons-material/Home'
import AssignmentIcon from '@mui/icons-material/Assignment'
import ForumIcon from '@mui/icons-material/Forum'
import QueryStatsIcon from '@mui/icons-material/QueryStats'
import SettingsIcon from '@mui/icons-material/Settings'
import SidebarOption from './SidebarOption'
import './Sidebar.css'

const Sidebar = () => {
  return (
    <div className='sidebar'>
      {/* {アイコン} */}
      <SidebarOption Icon={AccountCircleIcon} text='My account' navigate='profile' />
      <SidebarOption Icon={HomeIcon} text='Home' navigate='home' />
      <SidebarOption Icon={AssignmentIcon} text='Post' navigate='post' />
      <SidebarOption
        Icon={ForumIcon}
        text='ChatRoom'
        navigate='chatroom/O1ujIkBZmJWXwdZi3htg5yai14X2'
      />
      <SidebarOption Icon={QueryStatsIcon} text='Ranking' navigate='ranking' />
      <div className='setting-icon'>
        <SidebarOption Icon={SettingsIcon} text='Setting' navigate='setting' />
      </div>
    </div>
  )
}

export default Sidebar
