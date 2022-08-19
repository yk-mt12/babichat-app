import VerifiedUserIcon from '@mui/icons-material/VerifiedUser'
import { ChatBubbleOutline, FavoriteBorder } from '@mui/icons-material'
import './Post.css'
import { Avatar } from '@mui/material'
import { changeBabi } from '../../logic/babigo'
import { readAloud } from '../../logic/readText'
import { db } from '../../firebase'
import {
  arrayUnion,
  collection,
  doc,
  DocumentReference,
  serverTimestamp,
  updateDoc,
} from 'firebase/firestore'
import { useAuth } from '../../firebase/authFunction'
import { useEffect, useState } from 'react'
import { batchPostLiked, batchPostUnliked } from './Liked'

type PostProps = {
  author: DocumentReference
  displayName: string
  text: string
  avater: string
  image: string
  createTime: string
  updateTime: string
  likedCount: number
}

const Post = (props: PostProps) => {
  const signInUser = useAuth()
  const { avater, displayName, text, image, createTime, updateTime, likedCount } = props
  const babi = changeBabi(text)
  const [toggle, setToggle] = useState(false)
  const [isLiked, setIsLiked] = useState(false)

  /**
   * 音声読み上げ
   * @param text バビ語文章
   */
  const speechClick = (text: string) => {
    readAloud(text)
  }

  // const incrimentLikedUsers = async () => {
  //   const postRef = collection(db, 'posts').doc('4eADonIyVHL8bdISoN5T')
  //   await postRef.update({
  //     likedUsers: arrayUnion(signInUser.uid),
  //     updatedAt: serverTimestamp(),
  //   })
  // }

  // useEffect(() => {
  //   isLiked ? batchPostLiked() : batchPostUnliked()
  // }, [setIsLiked])

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
            <button onClick={() => speechClick(babi)}>読み上げる</button>
            <button onClick={() => setToggle(!toggle)}>翻訳</button>
            {toggle && <p>{text}</p>}
          </div>
        </div>
        <img src={image} alt='' />
        <div className='post--footer'>
          <ChatBubbleOutline fontSize='small' />
          <FavoriteBorder fontSize='small'/>
        </div>
      </div>
    </div>
  )
}

export default Post
