import { collection, doc, limit, onSnapshot, orderBy, query } from 'firebase/firestore'
import { memo, useEffect, useState } from 'react'
import { db } from '../../../firebase'
import { useAuth } from '../../../firebase/authFunction'
import { Grid } from '@mui/material'
import { useParams } from 'react-router-dom'
import Chat from './Chat'
import MessageBox from './MessageBox'
import './ChatRoom.css'
import Header from '../../ui/header/Header'
import UserList from './UserList'
import YourName from './YourName'
import BackgroundFluid from '../../ui/background/BackgroundFluid'

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
      <BackgroundFluid top={2} rigth={2} deg={10} backgroundColor={'#fff100'} />
      <BackgroundFluid top={40} rigth={60} deg={30} backgroundColor={'#fbad03'} />
      <BackgroundFluid top={5} rigth={100} deg={90} backgroundColor={'#a3e417'} />
      <BackgroundFluid top={60} rigth={120} deg={45} backgroundColor={'#ee6eee'} />
      <Header title='ちゃっとるーむ' />
      <Grid container justifyContent='space-between'>
        <Grid item xs={7.5} className='chatroom'>
          <div className='anotherName'>
            <YourName />
          </div>
          <div className='chat-screen'>
            <div className='message'>
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
