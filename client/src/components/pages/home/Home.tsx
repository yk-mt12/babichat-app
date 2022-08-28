import { Grid } from '@mui/material'
import GridItem from '../../ui/gridItem/GridItem'
import Header from '../../ui/header/Header'
import Message from '../message/Message'
import Ranking from '../ranking/Ranking'
import Setting from '../setting/Setting'
import TimeLine from '../timeline/TimeLine'
import './Home.css'

const Home = () => {
  return (
    <div className='dashboard--body'>
      <Header title='チャバットボ' />
      <Grid container direction='row' justifyContent='flex-start' alignItems='flex-start'>
        <GridItem child={<Ranking />} colRatio={3} navigate='ranking' />
        <GridItem child={<TimeLine />} colRatio={9} navigate='post' />
      </Grid>
      <Grid container direction='row' justifyContent='flex-start' alignItems='flex-start'>
        <GridItem child={<Message />} colRatio={4} navigate='message' />
        <GridItem child={<Setting />} colRatio={8} navigate='setting' />
      </Grid>
    </div>
  )
}

export default Home
