import { Grid } from '@mui/material'
import { useAuth } from '../../../firebase/authFunction'
import GridItem from '../../ui/gridItem/GridItem'
import IsLoginGrid from '../../ui/gridItem/IsLoginGrid'
import Header from '../../ui/header/Header'
import Message from '../message/ChatRoom'
import Ranking from '../ranking/ranking'
import Setting from '../setting/Setting'
import TimeLine from '../timeline/TimeLine'
import './Home.css'

const Home = () => {
  const signInUser = useAuth()

  return (
    <div className='dashboard--body'>
      <Header title='チャバットボ' />
      <Grid container direction='row' justifyContent='space-between' alignItems='center'>
        <GridItem
          child={<Ranking />}
          colRatio={7.9}
          navigate='ranking'
          width={300}
          height='40vh'
          isScroll={true}
        />
        <GridItem
          child={<TimeLine />}
          colRatio={3.9}
          navigate='post'
          width={300}
          height='40vh'
          isScroll={true}
        />
      </Grid>
      <Grid container direction='row' justifyContent='space-between' alignItems='center'>
        {signInUser.uid ? (
          <GridItem
            child={<Message />}
            colRatio={4.8}
            navigate='message'
            width={300}
            height='40vh'
            isScroll={true}
          />
        ) : (
          <IsLoginGrid
            colRatio={4.8}
            width={300}
            height='40vh'
            label='ログインが必要な機能です。'
          />
        )}
        {/* <GridItem child={<Setting />} colRatio={7} navigate='setting' width={300} height='40vh' /> */}
        <IsLoginGrid colRatio={7} width={300} height='40vh' label='Comming soon...' />
      </Grid>
    </div>
  )
}

export default Home
