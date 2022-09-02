import { ChatBubbleOutline, FavoriteBorder, Favorite } from '@mui/icons-material'
import { Avatar, Grid } from '@mui/material'
import { useLocation } from 'react-router-dom'
import { changeBabi } from '../../../logic/babigo'
import { readAloud } from '../../../logic/readText'
import { doc, DocumentReference, getDoc } from 'firebase/firestore'
import React, { memo, useEffect, useState } from 'react'
import useBatchPostLiked from '../../../hooks/useBatchPostLiked'
import Button from '@mui/material/Button'

import './Post.css'
import { db } from '../../../firebase'
import { useAuth } from '../../../firebase/authFunction'

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
  likedPosts: any[]
}

const Post = memo((props: PostProps) => {
  const { setPostId, getAnotherPostData } = useBatchPostLiked()
  const location = useLocation()
  const {
    avater,
    displayName,
    text,
    image,
    createTime,
    updateTime,
    likeCount,
    postId,
    likedPosts,
  } = props
  const babi = changeBabi(text)
  const signInUser = useAuth()
  const [isClicked, setIsClicked] = useState(false)
  const [isLiked, setIsLiked] = useState(false)
  const style = { marginTop: 6 }

  /**
   * 音声読み上げ
   * @param text バビ語文章
   */
  const speechClick = (text: string) => {
    readAloud(text)
  }

  const handleClick = (e: any) => {
    setPostId(postId)
    getAnotherPostData()
  }

  useEffect(() => {
    const isLikedCheck = async () => {
      const docRef = doc(db, 'users', signInUser.uid, 'likedPosts', postId)
      const docSnap = await getDoc(docRef)
      setIsLiked(docSnap.exists())
    }
    isLikedCheck()
  }, [handleClick])

  return (
    <div className='post'>
      {location.pathname !== '/home' ? (
        <>
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
              <Button variant='contained' onClick={() => speechClick(babi)}>
                読み上げる
              </Button>
            </Grid>
            <Grid item>
              <Button variant='contained' onClick={() => setIsClicked(!isClicked)}>
                翻訳
              </Button>
            </Grid>
          </Grid>
          <Grid container justifyContent='flex-end' alignItems='flex-start'>
            <Grid item md={0.8}>
              <ChatBubbleOutline fontSize='small' {...{ style }} />
            </Grid>
            <Grid item md={0.8}>
              <p style={{ marginTop: 2 }} className='text'>
                rep
              </p>
            </Grid>
            <Grid item md={0.8}>
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
        </>
      ) : (
        <>
          <Grid container direction='row' justifyContent='flex-start' alignItems='flex-start'>
            <Grid item md={2}>
              <Avatar src={avater} style={{ marginTop: 10 }} />
            </Grid>
            <Grid item md={6}>
              <h3>{displayName === '' ? '匿名' : displayName}</h3>
            </Grid>
          </Grid>
          <p {...{ style }}>{babi}</p>
          <Grid container justifyContent='flex-start' alignItems='flex-start'>
            <Grid item md={3} container>
              <Grid item md={4}>
                <ChatBubbleOutline fontSize='small' {...{ style }} />
              </Grid>
              <Grid item md={3}>
                <p style={{ marginTop: 2, marginBottom: 0 }} className='text'>
                  rep
                </p>
              </Grid>
            </Grid>
            <Grid item md={6} container>
              <Grid item md={2} mx={{ mt: 2 }}>
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
              <Grid item md={3}>
                <p style={{ marginTop: 2, marginBottom: 0 }} className='text'>
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
