import { Route, Routes } from 'react-router-dom'
import Home from '../components/pages/home/Home'
import ChatRoom from '../components/pages/message/ChatRoom'
import UserList from '../components/pages/message/UserList'
import Setting from '../components/pages/setting/Setting'
import Ranking from '../components/pages/ranking/ranking'
import Profile from '../components/pages/profile/Profile'
import SignIn from '../components/model/user/SignIn'
import SignUp from '../components/model/user/SignUp'
import TimeLine from '../components/pages/timeline/TimeLine'
import { useAuth } from '../firebase/authFunction'


const Router = () => {
  const signInUser = useAuth()
  console.log(signInUser)

  return (
    <div>
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/post' element={<TimeLine />} />
        <Route path='/chatroom/:anotherId' element={<ChatRoom />} />
        <Route path='/chatroom/' element={<UserList />} />
        <Route path='/setting' element={<Setting />} />
        <Route path='/ranking' element={<Ranking />} />
        <Route path='/login' element={<SignIn />} />
        <Route path='/signup' element={<SignUp />} />
      </Routes>
    </div>
  )
}

export default Router
