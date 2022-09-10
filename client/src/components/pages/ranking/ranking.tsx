import { Button, Grid } from '@mui/material'
import {
  query,
  orderBy,
  collectionGroup,
  onSnapshot,
  limit,
  DocumentReference,
} from 'firebase/firestore'
import { memo, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { db } from '../../../firebase'
import BackgroundFluid from '../../ui/background/BackgroundFluid'
import Fluid from '../../ui/background/Fluid'
import GridItem from '../../ui/gridItem/GridItem'
import Header from '../../ui/header/Header'
import './Ranking.css'
import RankingPost from './RankingPost'

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

// eslint-disable-next-line react/display-name
const Ranking = memo(() => {
  const location = useLocation()
  const [posts, setPosts] = useState<any>([])
  const [toggle, setToggle] = useState<boolean>(false)

  useEffect(() => {
    // postのいいね数順に並び替える
    const q: any = query(collectionGroup(db, 'posts'), orderBy('likeCount', 'desc'), limit(10))
    // リアルタイムでデータを取得
    onSnapshot(q, (querySnapshot: { docs: any[] }) => {
      setPosts(querySnapshot.docs.map((doc) => doc.data()))
    })
  }, [])

  return (
    <div className='ranking'>
      <Header title='Ranking' />
      {location.pathname !== '/home' && (
        <div className='toggle-button'>
          <Button
            variant='contained'
            onClick={() => {
              setToggle(!toggle)
            }}
            style={{ minWidth: '120px' }}
          >
            {toggle ? 'リプ数' : 'いいね数'}
          </Button>
        </div>
      )}

      <div className={`${location.pathname !== '/home' && 'ranking--block'}`}>
        <div>
          {posts &&
            posts.map((post: PostType, index: number) => (
              <RankingPost
                key={post.postId}
                author={post.author}
                displayName={post.displayName}
                text={post.text}
                avater={post.avater}
                image={post.image}
                createTime={post.createTime}
                updateTime={post.updateTime}
                likeCount={post.likeCount}
                postId={post.postId}
                rank={index + 1}
                isLike={toggle}
              />
            ))}
        </div>
      </div>
    </div>
  )
})

export default Ranking
