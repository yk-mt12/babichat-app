import { Avatar, Button } from '@mui/material'
import { useState } from 'react'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'
import { db } from '../../firebase'
import { useAuth } from '../../firebase/authFunction'

const PostBox = () => {
  const [displayName, setDisplayName] = useState<string>('')
  const [postMessage, setPostMessage] = useState<string>('')
  const [postImage, setPostImage] = useState<string>('')
  const signInUser = useAuth()
  const uid = signInUser.uid
  const avater = signInUser.photoURL
  const username = signInUser.displayName

  // console.log(username);

  const sendPost = (e: any) => {
    e.preventDefault()

    addDoc(collection(db, 'posts'), {
      uid: uid,
      displayName: displayName,
      username: username,
      verified: true,
      text: postMessage,
      avater: avater,
      image: postImage,
      createTime: serverTimestamp(),
      updateTime: serverTimestamp(),
      likeCount: 0,
    })
    setDisplayName('')
    setPostMessage('')
    setPostImage('')
  }

  return (
    <div className='postBox'>
      <form>
        <Avatar src={avater} />
        <input
          value={displayName}
          placeholder='名前を入力'
          type='text'
          onChange={(e) => setDisplayName(e.target.value)}
        />
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
