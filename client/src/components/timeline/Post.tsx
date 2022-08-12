import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser'
import { ChatBubbleOutline, FavoriteBorder, PublishOutlined, Repeat } from '@mui/icons-material'
import './Post.css'
import { Avatar } from '@mui/material'

type PostProps = {
  displayName: string
  username: string
  verified: boolean
  text: string
  avater: string
  image: string
}

const Post = (props: PostProps) => {
  const { displayName, username, verified, text, avater, image } = props
  return (
    <div className='post'>
      <div className='post--avater'>
        <Avatar src={avater} />
      </div>
      <div className='post--body'>
        <div className='post-header'>
          <div className='post--headerText'>
            <h3>{displayName}</h3>
            <span className='post--headerSpecial'>
              <VerifiedUserIcon className='post--badge' />@{username}
            </span>
          </div>
          <div className='post--headerDescription'>
            <p>{text}</p>
          </div>
        </div>
        <img src={image} alt='' />
        <div className='post--footer'>
          <ChatBubbleOutline fontSize='small' />
          <Repeat fontSize='small' />
          <FavoriteBorder fontSize='small' />
          <PublishOutlined fontSize='small' />
        </div>
      </div>
    </div>
  )
}

export default Post
