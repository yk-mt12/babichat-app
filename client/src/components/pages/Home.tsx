import { Route, Routes } from 'react-router-dom'

import Dashboard from './Dashboard'
import TimeLine from './TimeLine'
import Setting from './Setting'
import Ranking from './Ranking'
import Profile from './Profile'
import SignIn from '../signUp/SignIn'
import SignUp from '../signUp/SignUp'
import { useAuth } from '../../firebase/authFunction'
import ChatRoom from '../DM/ChatRoom'

const Home = () => {
  const signInUser = useAuth()
  console.log(signInUser);

  return (
    <div>
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/post' element={<TimeLine />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/chatroom' element={<ChatRoom />} />
        <Route path='/setting' element={<Setting />} />
        <Route path='/ranking' element={<Ranking />} />
        <Route path='/login' element={<SignIn />} />
        <Route path='/signup' element={<SignUp />} />
      </Routes>
    </div>
  )
}

export default Home
