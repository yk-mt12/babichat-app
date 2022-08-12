import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser'
import { ChatBubbleOutline, FavoriteBorder, PublishOutlined, Repeat } from '@mui/icons-material'
import './Post.css'

const Post = () => {
  return (
    <div className='post'>
      <div className='post--avater'>
        <AccountCircleIcon />
      </div>
      <div className='post--body'>
        <div className='post-header'>
          <div className='post--headerText'>
            <h3>プログラミングチュートリアル</h3>
            <span className='post--headerSpecial'>
              <VerifiedUserIcon className='post--badge' />
              @kitsune
            </span>
          </div>
          <div className='post--headerDescription'>
            <p>Reactなう</p>
          </div>
        </div>
        <img src='https://source.unsplash.com/random' alt='' />
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
