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

  /**
   * 音声読み上げ
   * @param text バビ語文章
   */
  const speechClick = (text) => {
    readAloud(text)
  };

  /**
   * バビ語の翻訳
   * @param text 原文
   */
  const transration = (text) => {

    const ts = document.getElementById('transration')
    const btn = document.getElementById('tsBtn')

    ts.innerText = text
    btn.innerText = '元に戻す'

    // if (document.getElementById('transration') == 'none') {
    //   document.getElementById('transration') = 'block'
    //   ts.innerText = text
    //   btn.innerText = '元に戻す'

    // } else {
    //   document.getElementById('transration') = 'none'
    // }

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
            <button onClick={() => speechClick(babi)}>読み上げる</button>
            <button id = 'tsBtn' onClick={() => transration(text)}>翻訳</button>
            <p id = 'transration'></p>
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
