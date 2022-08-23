import VerifiedUserIcon from '@mui/icons-material/VerifiedUser'
import { ChatBubbleOutline, FavoriteBorder } from '@mui/icons-material'
import './Post.css'
import { Avatar } from '@mui/material'
import { changeBabi } from '../../logic/babigo'
import { readAloud } from '../../logic/readText'
import {
  arrayUnion,
  collection,
  doc,
  DocumentReference,
  serverTimestamp,
  updateDoc,
  writeBatch,
} from 'firebase/firestore'
import { useAuth } from '../../firebase/authFunction'
import { useCallback, useEffect, useState } from 'react'
import useBatchPostLiked from '../../hooks/useBatchPostLiked'

import Button from '@mui/material/Button';

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

const Post = (props: PostProps) => {
  const signInUser = useAuth()
  const { checkPostIsLiked, setPostId } = useBatchPostLiked()
  const { avater, displayName, text, image, createTime, updateTime, likeCount, postId } = props
  const babi = changeBabi(text)
  const [isClicked, setIsClicked] = useState(false)

  /**
   * 音声読み上げ
   * @param text バビ語文章
   */
  const speechClick = (text: string) => {
    readAloud(text)
  }

  return (
    <div className='post'>
      <div className='post--avater'>
        <Avatar src={avater} />
      </div>
      <div className='post--body'>
        <div className='post-header'>
          <div className='post--headerText'>
            <h3>{displayName === '' ? '匿名' : displayName}</h3>
            {/* {username !== '' && (
                <span className='post--headerSpecial'>
                <VerifiedUserIcon className='post--badge' />@{username}
              </span>
            )} */}
          </div>
          <div className='post--headerDescription'>
            <p>{babi}</p>
            <Button variant="contained" onClick={() => speechClick(babi)}>読み上げる</Button>
            <Button variant="contained" onClick={() => setIsClicked(!isClicked)}>翻訳</Button>
            {isClicked && <p>{text}</p>}
          </div>
        </div>
        <img src={image} alt='' />
        <div className='post--footer'>
          <ChatBubbleOutline fontSize='small' />
          <div className='like-box'>
            <FavoriteBorder

              fontSize='small'
              onClick={() => {
                setPostId(postId)
                checkPostIsLiked()
              }}
            />
            <p>{likeCount}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Post
