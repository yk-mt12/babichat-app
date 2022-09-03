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
        {/* ランク */}
        <Grid item md={1.2}>
          <p className='rank-index'>{rank}.</p>
        </Grid>
        {/* アイコン */}
        <Grid item md={1}>
          <Avatar src={avater} style={{ marginTop: 10 }} />
        </Grid>
        {/* テキスト（バビ語） */}
        <Grid item md={6}>
          <p {...{ style }}>{babi}</p>
        </Grid>
        <Grid item container md justifyContent='space-between' alignItems='center'>
          {/* <Grid item md={6} container justifyContent='flex-start' alignItems='center'>
            <Grid item md={4}>
              <ChatBubbleOutline fontSize='small' {...{ style }} />
            </Grid>
            <Grid item>
              <p style={{ marginBottom: 5 }} className='text'>
                rep
              </p>
            </Grid>
          </Grid> */}

          {/* リプライ機能を実装した時、下記のmd={8}->{6}に修正する。justifyContet='flex-start'に変更 */}
          <Grid item md={8} container justifyContent='flex-end' alignItems='center'>
            {/* いいねアイコンといいね数 */}
            <Grid item md={4}>
              <FavoriteBorder fontSize='small' {...{ style }} />
            </Grid>
            <Grid item>
              <p style={{ marginBottom: 2 }} className='text'>
                {likeCount}
              </p>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
}

export default RankingPost
