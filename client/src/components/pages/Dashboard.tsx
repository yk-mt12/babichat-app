import React from 'react'
import Message from './message'
import TimeLine from './TimeLine'
import Setting from './Setting'
import Ranking from './ranking'

const Dashboard = () => {
  return (
    <div>
      <TimeLine />
      <Message />
      <Ranking />
      <Setting />
    </div>
  )
}

export default Dashboard
