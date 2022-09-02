import { collection, limit, onSnapshot, orderBy, query } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { db } from '../../../firebase'
import { useAuth } from '../../../firebase/authFunction'
import { Grid } from '@mui/material'
import { useParams } from 'react-router-dom'
import Chat from './Chat'
import MessageBox from './MessageBox'
import './ChatRoom.css'
import Header from '../../ui/header/Header'
import UserList from './UserList'

type chatProps = {
  sendid: string
  name: string
  msg: string
  createTime: any
  chatId: string
}

const ChatRoom = () => {
  const [chats, setChats] = useState<any>([])
  const { anotherId } = useParams()
  const signInUser = useAuth()
  const uid = signInUser.uid

  useEffect(() => {
    console.log(anotherId)
    if (anotherId !== undefined) {
      const chatroomRef = collection(db, 'users', uid, 'chatroom', anotherId || '', 'chats')
      const q = query(chatroomRef, orderBy('createTime'), limit(500))
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
      <div className='chatroom'>
        <Header title='ChatRoom' />
        <Grid container justifyContent='space-between' className='chat'>
          <Grid item xs={7.5}>
            <div className='grid chat-screen'>
              <div className='message' id='chatBottom'>
                {chats.map((chat: chatProps) => (
                  // eslint-disable-next-line react/jsx-key
                  <Chat
                    key={chat.chatId}
                    name={chat.name}
                    msg={chat.msg}
                    createTime={chat.createTime}
                    sendid={chat.sendid}
                  />
                ))}
              </div>
            </div>
            <div className='input-form'>
              <MessageBox />
            </div>
          </Grid>
          <UserList />
        </Grid>
      </div>
    </>
  )
}

export default ChatRoom
