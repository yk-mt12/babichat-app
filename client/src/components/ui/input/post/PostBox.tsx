import { Avatar, Button, Grid } from '@mui/material'
import { useState } from 'react'
import { collection, setDoc, doc, serverTimestamp, addDoc, updateDoc } from 'firebase/firestore'
import { db } from '../../../../firebase'
import { useAuth } from '../../../../firebase/authFunction'
import './PostBox.css'

const PostBox = () => {
  const [displayName, setDisplayName] = useState<string>('')
  const [postMessage, setPostMessage] = useState<string>('')
  const [postImage, setPostImage] = useState<string>('')
  const [postId, setPostId] = useState<string>('')
  const signInUser = useAuth()
  const uid = signInUser.uid
  const avater = signInUser.photoURL
  // const username = signInUser.displayName

  const sendPost = async (e: any) => {
    e.preventDefault()
    const usersRef = doc(db, 'users', uid) // uidを指定して、usersコレクションを取得
    const postsRef = collection(usersRef, 'posts') // ログインユーザに紐ずくpostsコレクションを取得

    const data = {
      author: usersRef.path,
      displayName: displayName,
      text: postMessage,
      image: postImage,
      postId: '',
      avater: avater,
      createTime: serverTimestamp(),
      updateTime: serverTimestamp(),
      likeCount: 0,
    }

    const postRef = await addDoc(postsRef, data) // ログインユーザのpostsコレクションにデータを追加
    await updateDoc(postRef, {
      postId: postRef.id,
    })

    setDisplayName('')
    setPostMessage('')
    setPostImage('')
  }

  return (
    <div className='postBox'>
      <form>
        <Grid container justifyContent='space-between' alignItems='center'>
          {/* <Grid item>
          <Avatar src={avater} />
        </Grid> */}
          <Grid item xs={8}>
            <input
              value={postMessage}
              placeholder='今どうしてる？'
              type='text'
              onChange={(e) => setPostMessage(e.target.value)}
              className='input-box'
            />
          </Grid>
          <Grid item xs={3.8}>
            <Button className='button' type='submit' onClick={sendPost}>
              投稿する
            </Button>
          </Grid>
        </Grid>

        {/* <input
          className='postBox--imageInput'
          value={postImage}
          placeholder='画像のURLを入力してください'
          type='text'
          onChange={(e) => setPostImage(e.target.value)}
        /> */}
      </form>
    </div>
  )
}

export default PostBox
