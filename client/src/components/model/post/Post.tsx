import { ChatBubbleOutline, FavoriteBorder } from '@mui/icons-material'
import './Post.css'
import { Avatar, Grid } from '@mui/material'
import { changeBabi } from '../../../logic/babigo'
import { readAloud } from '../../../logic/readText'
import { DocumentReference } from 'firebase/firestore'
import React, { memo, useState } from 'react'
import useBatchPostLiked from '../../../hooks/useBatchPostLiked'
import Button from '@mui/material/Button'

type PostProps = {
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

const Post = memo((props: PostProps) => {
  const { checkPostIsLiked, setPostId, getAnotherPostData } = useBatchPostLiked()
  const { avater, displayName, text, image, createTime, updateTime, likeCount, postId } = props
  const babi = changeBabi(text)
  const [isClicked, setIsClicked] = useState(false)
  const style = { margin: 0 }

  /**
   * 音声読み上げ
   * @param text バビ語文章
   */
  const speechClick = () => {
    readAloud(isClicked ? text: babi)
  }

  const handleClick = async (e: any) => {
    await setPostId(postId)
    await getAnotherPostData()
  }

  return (
    <div className='post'>
      {/* <Avatar src={avater} />
      <h3>{displayName === '' ? '匿名' : displayName}</h3>
      <p>{babi}</p>
      <Button variant='contained' onClick={() => speechClick(babi)}>
        読み上げる
      </Button>
      <Button variant='contained' onClick={() => setIsClicked(!isClicked)}>
        翻訳
      </Button>
      {isClicked && <p>{text}</p>}
      <img src={image} alt='' />
      <ChatBubbleOutline fontSize='small' />
      <FavoriteBorder fontSize='small' onClick={(e) => handleClick(e)} />
      <p>{likeCount}</p> */}

      <Grid container direction='row' justifyContent='space-between' alignItems='flex-start'>
        <Grid item md={1}>
          <Avatar src={avater} style={{ marginTop: 10 }} />
        </Grid>
        <Grid item md={11}>
          <h3>{displayName === '' ? '匿名' : displayName}</h3>
        </Grid>
      </Grid>
      <Grid container direction='row' justifyContent='space-between' alignItems='flex-start'>
        <Grid item md={12}>
          {isClicked ? <p {...{ style }}>{text} </p> : <p {...{ style }}>{babi}</p>}
        </Grid>
      </Grid>
      <Grid container direction='row' justifyContent='flex-start' alignItems='flex-start'>
        <Grid item>
          <Button variant='contained' size='small' onClick={() => speechClick()}>
            読み上げる
          </Button>
        </Grid>
        <Grid item>
          <Button variant='contained' size='small' onClick={() => setIsClicked(!isClicked)}>
            {isClicked ? 'バビ語': '翻訳'}
          </Button>
        </Grid>
      </Grid>
      <Grid container justifyContent='flex-end' alignItems='flex-start'>
        <Grid item md={0.8}>
          <ChatBubbleOutline fontSize='small' {...{ style }} />
        </Grid>
        <Grid item md={0.8}>
          <p {...{ style }} className='text'>
            rep
          </p>
        </Grid>
        <Grid item md={0.8}>
          <FavoriteBorder fontSize='small' {...{ style }} />
        </Grid>
        <Grid item md={0.8}>
          <p {...{ style }} className='text'>
            {likeCount}
          </p>
        </Grid>
      </Grid>
    </div>
  )
})

export default Post
