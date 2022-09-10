import { Avatar, Button, Grid } from '@mui/material'
import { useEffect, useState } from 'react'
import { collection, setDoc, doc, serverTimestamp, addDoc, updateDoc } from 'firebase/firestore'
import { db } from '../../../../firebase'
import { useAuth } from '../../../../firebase/authFunction'
import './PostBox.css'
import { useRecoilValue } from 'recoil'
import { signInUserState } from '../../../../store/auth'

const PostBox = () => {
  const [postMessage, setPostMessage] = useState<string>('')
  const [postImage, setPostImage] = useState<string>('')
  const [canSubmit, setCanSubmit] = useState<boolean>(true)
  const [error, setErrors] = useState('')
  const signInUser = useRecoilValue(signInUserState)
  const uid = signInUser.uid
  const avater = signInUser.photoURL
  // const username = signInUser.displayName

  const sendPost = async (e: any) => {
    e.preventDefault()
    if (postMessage.length < 3) {
      setErrors('2文字以上入力してください。')
      setCanSubmit(true)
      return
    }
    const usersRef = doc(db, 'users', uid) // uidを指定して、usersコレクションを取得
    const postsRef = collection(usersRef, 'posts') // ログインユーザに紐ずくpostsコレクションを取得

    const data = {
      author: usersRef.path,
      displayName: signInUser.displayName,
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

    setPostMessage('')
    setPostImage('')
    setErrors('')
  }

  useEffect(() => {
    if (postMessage.length >= 100) {
      setErrors(`100文字以上入力しないでください。文字数: -${postMessage.length - 100}`)
      setCanSubmit(true)
    } else if (postMessage.length < 3) {
      setCanSubmit(true)
    } else {
      setErrors('')
      setCanSubmit(false)
    }
  }, [postMessage])

  return (
    <div className='postBox'>
      <form>
        <Grid container justifyContent='space-between' alignItems='center'>
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
            <Button
              variant='contained'
              style={{ borderRadius: 50 }}
              className='button'
              type='submit'
              onClick={sendPost}
              disabled={canSubmit}
            >
              投稿する
            </Button>
          </Grid>
        </Grid>
        {error !== '' && (
          <span
            style={{
              color: 'red',
              fontSize: 14,
            }}
          >
            {error}
          </span>
        )}
      </form>
    </div>
  )
}

export default PostBox
