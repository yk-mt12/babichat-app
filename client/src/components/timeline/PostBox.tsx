import { Avatar, Button } from '@mui/material'
import React, { useState } from 'react'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'
import db from '../../firebase'

const PostBox = () => {
  const [postMessage, setPostMessage] = useState<string>('')
  const [postImage, setPostImage] = useState<string>('')

  const sendPost = (e: any) => {
    e.preventDefault()
    addDoc(collection(db, 'posts'), {
      displayName: 'プログラミングチュートリアル',
      username: 'kitsune',
      verified: true,
      text: postMessage,
      avater: 'http://shincode.info/wp-content/uploads/2021/12/icon.png',
      image: postImage,
      timestamp: serverTimestamp(),
    })
    setPostMessage('')
    setPostImage('')
  }

  return (
    <div className='postBox'>
      <form>
        <Avatar />
        <input
          value={postMessage}
          placeholder='今どうしてる？'
          type='text'
          onChange={(e) => setPostMessage(e.target.value)}
        />
        <input
          className='postBox--imageInput'
          value={postImage}
          placeholder='画像のURLを入力してください'
          type='text'
          onChange={(e) => setPostImage(e.target.value)}
        />
        <Button className='postBox-postButton' type='submit' onClick={sendPost}>
          投稿する
        </Button>
      </form>
    </div>
  )
}

export default PostBox
