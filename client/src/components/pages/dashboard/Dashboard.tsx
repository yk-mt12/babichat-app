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
      <Grid container direction='row' justifyContent='flex-start' alignItems='flex-start'>
        <GridItem child={<Ranking />} colRatio={3} navigate='ranking'/>
        <GridItem child={<TimeLine />} colRatio={9} navigate='post'/>
      </Grid>
      <Grid container direction='row' justifyContent='flex-start' alignItems='flex-start'>
        <GridItem child={<Message />} colRatio={4} navigate='message'/>
        <GridItem child={<Setting />} colRatio={8} navigate='setting'/>
      </Grid>
    </div>
  )
}

export default Dashboard
