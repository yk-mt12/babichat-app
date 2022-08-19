import { Avatar, Button } from '@mui/material'
import { useState } from 'react'
import { collection, setDoc, doc, serverTimestamp, addDoc } from 'firebase/firestore'
import { db } from '../../firebase'
import { useAuth } from '../../firebase/authFunction'

const PostBox = () => {
  const [displayName, setDisplayName] = useState<string>('')
  const [postMessage, setPostMessage] = useState<string>('')
  const [postImage, setPostImage] = useState<string>('')
  const signInUser = useAuth()
  const uid = signInUser.uid
  const avater = signInUser.photoURL
  // const username = signInUser.displayName

  const sendPost = (e: any) => {
    e.preventDefault()
    const usersRef = doc(db, 'users', uid) // uidを指定して、usersコレクションを取得
    const postsRef = collection(usersRef, 'posts') // ログインユーザに紐ずくpostsコレクションを取得

    const data = {
      author: usersRef.path,
      displayName: displayName,
      text: postMessage,
      image: postImage,
      avater: avater,
      createTime: serverTimestamp(),
      updateTime: serverTimestamp(),
      likeCount: 0,
    }

    addDoc(postsRef, data) // ログインユーザのpostsコレクションにデータを追加
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
