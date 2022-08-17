import { Route, Routes } from 'react-router-dom'

import Dashboard from './Dashboard'
import Message from './Message'
import TimeLine from './TimeLine'
import Setting from './Setting'
import Ranking from './Ranking'
import Profile from './Profile'
import SignIn from '../signUp/SignIn'
import SignUp from '../signUp/SignUp'

const Home = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/post' element={<TimeLine />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/message' element={<Message />} />
        <Route path='/setting' element={<Setting />} />
        <Route path='/ranking' element={<Ranking />} />
        <Route path='/login' element={<SignIn />} />
        <Route path='/signup' element={<SignUp />} />
      </Routes>
    </div>
  )
}

export default Home
