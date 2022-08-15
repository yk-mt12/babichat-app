import React from 'react'
import Message from './message'
import TimeLine from './TimeLine'
import Setting from './Setting'
import Ranking from './ranking'

const Dashboard = () => {
  return (
    <div className='dashboard--body'>
      <TimeLine />
      <Message />
      <Ranking />
      <Setting />
    </div>
  )
}

export default Dashboard
