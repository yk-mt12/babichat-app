import { collection, onSnapshot, orderBy, query } from 'firebase/firestore'
import { memo, useEffect, useState } from 'react'
import { db } from '../../../firebase'
import { useAuth } from '../../../firebase/authFunction'
import { Grid } from '@mui/material'
import { useParams } from 'react-router-dom'
import Chat from './Chat'
import MessageBox from './MessageBox'
import Header from '../../ui/header/Header'
import UserList from './UserList'
import YourName from './YourName'
import './ChatRoom.css'

type chatProps = {
  sendid: string
  name: string
  msg: string
  createTime: any
  chatId: string
  photoURL: string
}

// eslint-disable-next-line react/display-name
const ChatRoom = memo(() => {
  const [chats, setChats] = useState<any>([])
  const { anotherId } = useParams()
  const signInUser = useAuth()
  const uid = signInUser.uid

  useEffect(() => {
    if (anotherId !== undefined) {
      const chatroomRef = collection(db, 'users', uid, 'chatroom', anotherId || '', 'chats')
      const q = query(chatroomRef, orderBy('createTime'))

      const unsub = onSnapshot(q, (querySnapshot) => {
        setChats(querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))

        const chatscreen = document.querySelector('.chat-screen')
        if (chatscreen) chatscreen.scrollTop = chatscreen.scrollHeight
      })
      return () => unsub()
    }
  }, [anotherId])

  return (
    <>
      <Header title='ちゃっとるーむ' />
      <Grid container justifyContent='space-between'>
        <Grid item xs={7.5} className='chatroom'>
          <div className='anotherName'>
            <YourName />
          </div>
          <div className='chat-screen'>
            {chats.map((chat: chatProps) => (
              <Chat
                key={chat.chatId}
                name={chat.name}
                msg={chat.msg}
                createTime={chat.createTime}
                sendid={chat.sendid}
                photoURL={chat.photoURL}
              />
            ))}
          </div>
          <div className='input-form'>
            <MessageBox />
          </div>
        </Grid>
        <UserList />
      </Grid>
    </>
  )
})

export default ChatRoom
