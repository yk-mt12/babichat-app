import { Link } from 'react-router-dom'
import { memo } from 'react'
import { Avatar } from '@mui/material'
import { useRecoilValue } from 'recoil'
import { signInUserState } from '../../../store/auth'
import HomeIcon from '@mui/icons-material/Home'
import AssignmentIcon from '@mui/icons-material/Assignment'
import ForumIcon from '@mui/icons-material/Forum'
import QueryStatsIcon from '@mui/icons-material/QueryStats'
import SidebarOption from './SidebarOption'
import './Sidebar.css'

// eslint-disable-next-line react/display-name
const Sidebar = memo(() => {
  const user = useRecoilValue(signInUserState)

  return (
    <>
      <div className='sidebar'>
        <link
          href='https://fonts.googleapis.com/css2?family=Hachi+Maru+Pop&family=Mochiy+Pop+P+One&display=swap'
          rel='stylesheet'
        />
        {/* ロゴ */}
        <h1 className='logo'>ちゃばっとぼ</h1>
        {/* {アイコン} */}
        <div className='profile-block'>
          <Link to='/profile'>
            <Avatar src={user.photoURL} sx={{ margin: '0 auto', width: 100, height: 100 }} />
            <p className='account-text'>ぷろふぃーる</p>
          </Link>
        </div>
        <SidebarOption Icon={HomeIcon} text='ほーむ' navigate='home' />
        <SidebarOption Icon={AssignmentIcon} text='ぽすと' navigate='post' />
        <SidebarOption
          Icon={ForumIcon}
          text='ちゃっと'
          // navigate='chatroom/O1ujIkBZmJWXwdZi3htg5yai14X2'
          navigate='chatroom'
        />
        <SidebarOption Icon={QueryStatsIcon} text='らんきんぐ' navigate='ranking' />
        <div className='setting-icon'>
          {/* <SidebarOption Icon={SettingsIcon} text='Setting' navigate='setting' /> */}
        </div>
      </div>
    </>
  )
})

export default Sidebar
