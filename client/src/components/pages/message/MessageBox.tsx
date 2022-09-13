import { addDoc, collection, doc, Timestamp, updateDoc } from 'firebase/firestore'
import { memo, useState } from 'react'
import { db } from '../../../firebase'
import { useAuth } from '../../../firebase/authFunction'
import { useParams } from 'react-router-dom'
import SendIcon from '@mui/icons-material/Send'
import './MessageBox.css'

type ChatLog = {
  sendid: string
  name: string
  msg: string
  createTime: any
  photoURL: string
}

// eslint-disable-next-line react/display-name
const MessageBox = memo(() => {
  const signInUser = useAuth()
  const displayName = signInUser.displayName
  const photoURL = signInUser.photoURL
  const uid = signInUser.uid
  const [msg, setMsg] = useState('')
  const { anotherId } = useParams()

  const sendMsg = async (e: any) => {
    e.preventDefault()

    const data: ChatLog = {
      sendid: uid,
      name: displayName || '',
      msg: msg,
      createTime: Timestamp.now(),
      photoURL: photoURL || '',
    }

    const chatroomRef = doc(db, 'users', uid, 'chatroom', anotherId || '')
    const chatsRef = collection(chatroomRef, 'chats')

    const receiveChatroomRef = doc(db, 'users', anotherId || '', 'chatroom', uid)
    const receiveChatsRef = collection(receiveChatroomRef, 'chats')

    if (msg === '') {
      console.log('メッセージは空です')
      return
    }
    const chatRef = await addDoc(chatsRef, data)

    await updateDoc(chatRef, {
      chatId: chatRef.id,
    })

    const receiveRef = await addDoc(receiveChatsRef, data)
    await updateDoc(receiveRef, {
      chatId: receiveRef.id,
    })
    setMsg('')
  }

  return (
    <form onSubmit={sendMsg}>
      <input
        placeholder='新しいメッセージの作成'
        type='text'
        value={msg}
        onChange={(e) => setMsg(e.target.value)}
        className='input-box'
      />
      <SendIcon className='postBox-postButton' type='submit' onClick={sendMsg} />
    </form>
  )
})

export default MessageBox
