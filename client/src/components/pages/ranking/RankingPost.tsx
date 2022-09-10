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
  isLike: boolean
}

const RankingPost = (props: Props) => {
  const {
    avater,
    displayName,
    text,
    image,
    createTime,
    updateTime,
    likeCount,
    postId,
    rank,
    isLike,
  } = props
  const babi = changeBabi(text ? text : 'null')

  const style = { marginTop: 20 }

  return (
    <div className='ranking--post'>
      <Grid container justifyContent='space-between'>
        <Grid item md={6} container justifyContent='flex-start' spacing={2}>
          {/* ランク */}
          <Grid item md={1.5}>
            <p className='rank-index'>{rank}.</p>
          </Grid>
          {/* アイコン */}
          <Grid item>
            <Avatar src={avater} style={{ marginTop: 10 }} />
          </Grid>
          {/* テキスト（バビ語） */}
          <Grid item>
            <p {...{ style }}>{babi}</p>
          </Grid>
        </Grid>

        {/* リプライ */}
        {isLike ? (
          <Grid item md={6} container justifyContent='flex-end' alignItems='center' spacing={1}>
            <Grid item md={2}>
              <ChatBubbleOutline fontSize='small' {...{ style }} />
            </Grid>
            <Grid item>
              <p style={{ marginBottom: 5 }} className='text'>
                0
              </p>
            </Grid>
          </Grid>
        ) : (
          <Grid item md={6} container justifyContent='flex-end' alignItems='center' spacing={1}>
            {/* いいねアイコンといいね数 */}
            <Grid item md={2}>
              <FavoriteBorder fontSize='small' {...{ style }} />
            </Grid>
            <Grid item>
              <p style={{ marginBottom: 2 }} className='text'>
                {likeCount}
              </p>
            </Grid>
          </Grid>
        )}
      </Grid>
    </div>
  )
}

export default RankingPost
