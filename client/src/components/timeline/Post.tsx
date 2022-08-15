import VerifiedUserIcon from '@mui/icons-material/VerifiedUser'
import { ChatBubbleOutline, FavoriteBorder, PublishOutlined, Repeat } from '@mui/icons-material'
import './Post.css'
import { Avatar } from '@mui/material'
import { changeBabi }  from '../../logic/babigo'
import { readAloud } from '../../logic/readText'
// import { getText }  from '../../logic/changeText'


type PostProps = {
  displayName: string
  username: string
  verified: boolean
  text: string
  avater: string
  image: string
  // timestamp: any
}

const Post = (props: PostProps) => {
  const { displayName, username, verified, text, avater, image } = props
  const babi = changeBabi(text)

  const handleClick = (text) => {
    readAloud(text)
  };
  return (
    <div className='post'>
      <div className='post--avater'>
        <Avatar src={avater} />
      </div>
      <div className='post--body'>
        <div className='post-header'>
          <div className='post--headerText'>
            <h3>{displayName === '' ? '匿名' : displayName}</h3>
            {username !== '' && (
              <span className='post--headerSpecial'>
                <VerifiedUserIcon className='post--badge' />@{username}
              </span>
            )}
          </div>
          <div className='post--headerDescription'>
            <p>{ babi }</p>
            {/* <p>翻訳:</p>
            <p>{ text }</p> */}
            <button onClick={() => handleClick(babi)}>読み上げる</button>
            {/* <p>{text}</p> */}
            {/* <span className='post--timestamp'>{timestamp}</span> */}
          </div>
        </div>
        <img src={image} alt='' />
        <div className='post--footer'>
          <ChatBubbleOutline fontSize='small' />
          <FavoriteBorder fontSize='small' />
        </div>
      </div>
    </div>
  )
}

export default Post
