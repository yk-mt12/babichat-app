import { ChatBubbleOutline, FavoriteBorder } from '@mui/icons-material'
import { Avatar, Grid } from '@mui/material'
import { DocumentReference } from 'firebase/firestore'
import { changeBabi } from '../../../logic/babigo'
import './Ranking.css'

type Props = {
  author: DocumentReference
  displayName: string
  text: string
  avater: string
  image: string
  createTime: string
  updateTime: string
  likeCount: number
  postId: string
  rank: number
}

const RankingPost = (props: Props) => {
  const { avater, displayName, text, image, createTime, updateTime, likeCount, postId, rank } =
    props
  const babi = changeBabi(text ? text : 'null')

  const style = { marginTop: 20 }

  return (
    <div className='ranking--post'>
      <Grid container>
        <Grid item md={1}>
          <p className='rank-index'>{rank}.</p>
        </Grid>
        <Grid item md={1}>
          <Avatar src={avater} style={{ marginTop: 10 }} />
        </Grid>
        <Grid item md={8}>
          <p {...{ style }}>{babi}</p>
        </Grid>
        <Grid item md={0.5}>
          <ChatBubbleOutline fontSize='small' {...{ style }} />
        </Grid>
        <Grid item md={0.5}>
          <p {...{ style }} className='text'>
            rep
          </p>
        </Grid>
        <Grid item md={0.5}>
          <FavoriteBorder fontSize='small' {...{ style }} />
        </Grid>
        <Grid item md={0.5}>
          <p {...{ style }} className='text'>
            {likeCount}
          </p>
        </Grid>
      </Grid>
    </div>
  )
}

export default RankingPost
