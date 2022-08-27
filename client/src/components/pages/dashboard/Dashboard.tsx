import { Grid } from '@mui/material'
import GridItem from '../../ui/gridItem/GridItem'
import Message from '../message/Message'
import Ranking from '../ranking/ranking'
import Setting from '../setting/Setting'
import TimeLine from '../timeline/TimeLine'
import './Dashboard.css'

const Dashboard = () => {
  return (
    <div className='dashboard--body'>
      {/* <TimeLine />
      <Message />
      <Ranking />
      <Setting /> */}
      <Grid container direction='row' justifyContent='center' alignItems='flex-start'>
        <GridItem child={<Ranking />} colRatio={6} />
        <GridItem child={<TimeLine />} colRatio={6} />
      </Grid>
      <Grid container direction='row' justifyContent='center' alignItems='flex-start'>
        <GridItem child={<Message />} colRatio={4} />
        <GridItem child={<Setting />} colRatio={8} />
      </Grid>
    </div>
  )
}

export default Dashboard
