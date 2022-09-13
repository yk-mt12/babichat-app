import { FavoriteBorder, Favorite, ChatBubbleOutline } from '@mui/icons-material'
import { Avatar, Grid } from '@mui/material'
import { useLocation, useNavigate } from 'react-router-dom'
import { changeBabi } from '../../../logic/babigo'
import { readAloud } from '../../../logic/readText'
import { doc, DocumentReference, getDoc } from 'firebase/firestore'
import { memo, useEffect, useState } from 'react'
import { db } from '../../../firebase'
import { useAuth } from '../../../firebase/authFunction'
import useBatchPostLiked from '../../../hooks/useBatchPostLiked'
import Button from '@mui/material/Button'
import daysAgo from '../../../logic/daysAgo'
import './Post.css'

type PostProps = {
  author: DocumentReference
  displayName: string
  text: string
  avater: string
  image: string
  createTime: any
  updateTime: string
  likeCount: number
  postId: string
  likedPosts?: any[]
}

// eslint-disable-next-line react/display-name
const Post = memo((props: PostProps) => {
  const { avater, displayName, text, createTime, likeCount, postId } = props
  const { setPostId, getAnotherPostData, checkPostIsLiked } = useBatchPostLiked()
  const [isClicked, setIsClicked] = useState(false)
  const [isLiked, setIsLiked] = useState(false)
  const [sendTime, setSendTime] = useState('')
  const signInUser = useAuth()
  const location = useLocation()
  const babi = changeBabi(text)
  const style = { marginTop: 8 }
  const history = useNavigate()

  /**
   * 音声読み上げ
   * @param text バビ語文章
   */
  const speechClick = (text: string) => {
    readAloud(text)
  }

  const handleClick = async () => {
    await setPostId(postId)
    await getAnotherPostData()
    await checkPostIsLiked()
  }

  useEffect(() => {
    const isLikedCheck = async () => {
      const sendTime = createTime.toDate()
      const docRef = doc(db, 'users', signInUser.uid, 'likedPosts', postId)
      const docSnap = await getDoc(docRef)
      setSendTime(daysAgo(sendTime))
      setIsLiked(docSnap.exists())
    }
    isLikedCheck()
  }, [handleClick])

  const move = (postId: string) => {
    history(`/post/${postId}`) // 画面遷移
  }

  return (
    <div className='post'>
      {location.pathname !== '/home' ? (
        <>
          {/* /postの時 */}
          <Grid container spacing={1} justifyContent='flex-start' alignItems='flex-start'>
            {/* アイコン */}
            <Grid item md={1}>
              <Avatar src={avater} style={{ marginTop: 10 }} />
            </Grid>

            {/* ユーザーネーム */}
            <Grid item md={1}>
              <h3>{displayName || 'ばびー'}</h3>
            </Grid>

            {/* 投稿時間*/}
            <Grid item>
              <div className='sendtime'>{sendTime}</div>
            </Grid>
          </Grid>
          {/* テキスト */}
          <Grid container direction='row' justifyContent='space-between' alignItems='flex-start'>
            <Grid item md={12} onClick={() => move(postId)}>
              {isClicked ? <p {...{ style }}>{text} </p> : <p {...{ style }}>{babi}</p>}
            </Grid>
            {/* ボタン：翻訳機能、読み上げ機能 */}
            <Grid container direction='row' justifyContent='space-between' alignItems='flex-start'>
              <Grid item container md={6} justifyContent='flex-start' spacing={1.5}>
                <Grid item md={2.7}>
                  <Button
                    variant='contained'
                    onClick={() => speechClick(babi)}
                    style={{ minWidth: '104px' }}
                  >
                    読み上げる
                  </Button>
                </Grid>
                <Grid item md={2.2}>
                  <Button variant='contained' onClick={() => setIsClicked(!isClicked)}>
                    {isClicked == true ? 'バビ語' : '翻訳'}
                  </Button>
                </Grid>
              </Grid>
              <Grid item container md={5} justifyContent='flex-end'>
                <Grid item md={1}>
                  <ChatBubbleOutline fontSize='small' {...{ style }} />
                </Grid>
                <Grid item md={0.8}>
                  <p style={{ marginTop: 4 }} className='text'>
                    0
                  </p>
                </Grid>
                <Grid item md={1}>
                  {isLiked ? (
                    <Favorite
                      fontSize='small'
                      {...{ style }}
                      onClick={handleClick}
                      sx={{ color: 'rgb(249, 24, 128)' }}
                    />
                  ) : (
                    <FavoriteBorder fontSize='small' {...{ style }} onClick={handleClick} />
                  )}
                </Grid>
                <Grid item md={0.8}>
                  <p style={{ marginTop: 4 }} className='text'>
                    {likeCount}
                  </p>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </>
      ) : (
        <>
          {/* /homeの時 */}
          <Grid container direction='row' justifyContent='flex-start' alignItems='flex-start'>
            <Grid item md={2}>
              <Avatar src={avater} style={{ marginTop: 10 }} />
            </Grid>
            <Grid item md={6}>
              <h3>{displayName || 'ばびー'}</h3>
            </Grid>
          </Grid>
          <Grid container justifyContent='space-between' alignItems='flex-start'>
            <Grid item md={7}>
              <p {...{ style, marginbottom: 0 }}>{babi}</p>
            </Grid>
            <Grid item md={3} container>
              <Grid item md={4}>
                <ChatBubbleOutline fontSize='small' {...{ style }} />
              </Grid>
              <Grid item md={3}>
                <p style={{ marginTop: 2, marginBottom: 0 }} className='text'>
                  0
                </p>
              </Grid>
            </Grid>
            <Grid item md={5} container justifyContent='flex-end' alignItems='flex-start'>
              <Grid item md={4} mx={{ mt: 2 }}>
                {isLiked ? (
                  <Favorite
                    fontSize='small'
                    {...{ style }}
                    onClick={handleClick}
                    sx={{ color: 'rgb(249, 24, 128)' }}
                  />
                ) : (
                  <FavoriteBorder fontSize='small' {...{ style }} onClick={handleClick} />
                )}
              </Grid>
              <Grid item md={6}>
                <p style={{ marginTop: 4, marginBottom: 0 }} className='text'>
                  {likeCount}
                </p>
              </Grid>
            </Grid>
          </Grid>
        </>
      )}
    </div>
  )
})

export default Post
