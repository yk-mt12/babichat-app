import { Navigate } from 'react-router-dom'

import Message from './Message'
import TimeLine from './TimeLine'
import Setting from './Setting'
import Ranking from './Ranking'
import Sidebar from '../sidebar/Sidebar'
import { useAuth } from '../../firebase/authFunction'
import SignOut from '../signUp/SignOut'
import './Dashboard.css'
const Dashboard = () => {
  const signInUser = useAuth()

  if (!signInUser) {
    return <Navigate to='/login' />
  } else {
    return (
      <div className='dashboard--body'>
        <Sidebar />
        <TimeLine />
        <Message />
        <Ranking />
        <Setting />
        <SignOut />
      </div>
    )
  }
}

export default Dashboard
