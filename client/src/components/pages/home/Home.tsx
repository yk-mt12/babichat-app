import { Grid } from '@mui/material'
import GridItem from '../../ui/gridItem/GridItem'
import Header from '../../ui/header/Header'
import Message from '../message/ChatRoom'
import Ranking from '../ranking/ranking'
import Setting from '../setting/Setting'
import TimeLine from '../timeline/TimeLine'
import './Home.css'

const Home = () => {
  const anotherId = 'O1ujIkBZmJWXwdZi3htg5yai14X2'
  return (
    <div className='dashboard--body'>
      <Header title='チャバットボ' />
      <Grid container direction='row' justifyContent='space-between' alignItems='center'>
        <GridItem child={<Ranking />} colRatio={5.9} navigate='ranking' width={300} height='40vh' />
        <GridItem child={<TimeLine />} colRatio={5.9} navigate='post' width={300} height='40vh' />
      </Grid>
      <Grid container direction='row' justifyContent='space-between' alignItems='center'>
        <GridItem child={<Message />} colRatio={4.8} navigate={`chatroom/${anotherId}`} width={300} height='40vh' />
        <GridItem child={<Setting />} colRatio={7} navigate='setting' width={300} height='40vh' />
      </Grid>
    </div>
  )
}

export default Home
