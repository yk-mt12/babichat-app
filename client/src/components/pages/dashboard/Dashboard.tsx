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
      <Grid container>
        <GridItem child={<Ranking />} colRatio={3} />
        <GridItem child={<Ranking />} colRatio={9} />
        <GridItem child={<Ranking />} colRatio={10} />
        <GridItem child={<Ranking />} colRatio={2} />
        {/* <div className='dashboard-body--item'>
          <GridItem child={<Ranking />} />
        </div>
        <div className='dashboard-body--item'>
          <GridItem child={<TimeLine />} />
        </div>
      </Grid>
      <Grid container direction='row'>
        <div className='dashboard-body--item'>
          <GridItem child={<Message />} />
        </div>
        <div className='dashboard-body--item'>
          <GridItem child={<Setting />}  />
        </div> */}
      </Grid>
    </div>
  )
}

export default Dashboard
