import { useState } from 'react'
import './App.css'
import Sidebar from './components/sidebar/Sidebar'
import TimeLine from './components/timeline/TimeLine'

function App() {
  return (
    <div className='app'>
      <Sidebar />
      {/* Ranking */}
      {/* TimeLine(post) */}
      <TimeLine />
      {/* Message */}
      {/* Setting */}
    </div>
  )
}

export default App
