import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import Dashboard from './components/pages/dashboard'
import Sidebar from './components/sidebar/Sidebar'
import Message from './components/pages/message'
import TimeLine from './components/pages/TimeLine'
import Setting from './components/pages/Setting'
import Ranking from './components/pages/ranking'
import Profile from './components/pages/profile'

function App() {
  return (
    <Router>
      <div className='app'>
        <Sidebar />
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/post' element={<TimeLine />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/message' element={<Message />} />
          <Route path='/setting' element={<Setting />} />
          <Route path='/ranking' element={<Ranking />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
