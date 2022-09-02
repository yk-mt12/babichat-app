import { Navigate, Route, Routes } from 'react-router-dom'
import Home from '../components/pages/home/Home'
import ChatRoom from '../components/pages/message/ChatRoom'
import UserList from '../components/pages/message/UserList'
import Setting from '../components/pages/setting/Setting'
import Ranking from '../components/pages/ranking/RankingPost'
import Profile from '../components/pages/profile/Profile'
import SignIn from '../components/model/user/SignIn'
import SignUp from '../components/model/user/SignUp'
import TimeLine from '../components/pages/timeline/TimeLine'
import { PrivateRoute } from './PrivateRoute'

const Router = () => {
  return (
    <div>
      <Routes>
        <Route
          path='/home'
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
        <Route
          path='/post'
          element={
            <PrivateRoute>
              <TimeLine />
            </PrivateRoute>
          }
        />
        <Route
          path='/profile'
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          }
        />
        <Route
          path='/chatroom/:anotherId'
          element={
            <PrivateRoute>
              <ChatRoom />
            </PrivateRoute>
          }
        />
        <Route
          path='/setting'
          element={
            <PrivateRoute>
              <Setting />
            </PrivateRoute>
          }
        />
        <Route
          path='/ranking'
          element={
            <PrivateRoute>
              <Ranking />
            </PrivateRoute>
          }
        />
        <Route path='/login' element={<SignIn />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='*' element={<Navigate to='/home' replace />} />
      </Routes>
    </div>
  )
}

export default Router
