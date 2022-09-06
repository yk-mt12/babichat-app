import { Grid } from '@mui/material'
import {
  query,
  orderBy,
  collectionGroup,
  onSnapshot,
  limit,
  DocumentReference,
} from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { db } from '../../../firebase'
import BackgroundFluid from '../../ui/background/BackgroundFluid'
import GridItem from '../../ui/gridItem/GridItem'
import Header from '../../ui/header/Header'
import './Ranking.css'
import RankingPostTimeline from './RankingTimeline'

type PostType = {
  author: DocumentReference
  displayName: string
  text: string
  avater: string
  image: string
  createTime: string
  updateTime: string
  likeCount: number
  postId: string
}

const Ranking = () => {
  const [posts, setPosts] = useState<any>([])

  useEffect(() => {
    // postのいいね数順に並び替える
    const q: any = query(collectionGroup(db, 'posts'), orderBy('likeCount', 'desc'), limit(10))
    // リアルタイムでデータを取得
    onSnapshot(q, (querySnapshot: { docs: any[] }) => {
      setPosts(querySnapshot.docs.map((doc) => doc.data()))
    })
  }, [])

  const postsArray = posts // useStateのpostsをpropsとして<RankingPostTimeline />に渡すとエラーになるため、postsArrayにコピー
  const location = useLocation()

  return (
    <div>
      <BackgroundFluid top={2} rigth={2} deg={10} backgroundColor={'#fff100'} />
      <BackgroundFluid top={40} rigth={60} deg={30} backgroundColor={'#fbad03'} />
      <BackgroundFluid top={5} rigth={100} deg={90} backgroundColor={'#a3e417'} />
      <BackgroundFluid top={60} rigth={120} deg={45} backgroundColor={'#ee6eee'} />

      <Header title='らんきんぐ' />
      {/* {location.pathname !== '/home' && (
        <Grid container justifyContent='space-between' alignItems='center'>
          <GridItem colRatio={8} label='いいね数' height={2} cName=' hover-text' />
          <GridItem colRatio={5.95} label='返信数' height={2} cName=' hover-text' />
        </Grid>
      )} */}

      <div className={`${location.pathname !== '/home' && 'ranking--block'}`}>
        <RankingPostTimeline postsArray={postsArray} />
      </div>
    </div>
  )
}

export default Ranking
