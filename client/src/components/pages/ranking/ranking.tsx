import { query, orderBy, collectionGroup, onSnapshot, limit } from 'firebase/firestore'
import { memo, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { db } from '../../../firebase'
import BackgroundFluid from '../../ui/background/BackgroundFluid'
import Fluid from '../../ui/background/Fluid'
import GridItem from '../../ui/gridItem/GridItem'
import Header from '../../ui/header/Header'
import './Ranking.css'
import RankingPostTimeline from './RankingTimeline'

// eslint-disable-next-line react/display-name
const Ranking = memo(() => {
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
    <>
      <div>
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
      {location.pathname !== '/home' && <Fluid />}
    </>
  )
})

export default Ranking
