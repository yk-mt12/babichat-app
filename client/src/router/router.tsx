import { Navigate, Route, Routes } from 'react-router-dom'

import Home from '../components/pages/home/Home'
import Message from '../components/pages/message/ChatRoom'
import Setting from '../components/pages/setting/Setting'
import Ranking from '../components/pages/ranking/Ranking'
import Profile from '../components/pages/profile/Profile'
import SignIn from '../components/model/user/SignIn'
import SignUp from '../components/model/user/SignUp'
import TimeLine from '../components/pages/timeline/TimeLine'
import { useAuth } from '../firebase/authFunction'
import { PrivateRoute } from './PrivateRoute'

const Router = () => {
  const signInUser = useAuth()
  console.log(signInUser)

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
              <Message />
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
