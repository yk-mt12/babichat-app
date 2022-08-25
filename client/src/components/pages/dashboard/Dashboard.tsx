
import Message from '../message/Message'
import Ranking from '../ranking/ranking'
import Setting from '../setting/Setting'
import TimeLine from '../timeline/TimeLine'
import './Dashboard.css'

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
