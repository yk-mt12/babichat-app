import { Avatar } from '@mui/material'
import React, { memo, useState } from 'react'
import { useAuth } from '../../../firebase/authFunction'
import { changeBabi } from '../../../logic/babigo'
import './Chat.css'
import ChatRoom from './ChatRoom'

type chatProps = {
  sendid: string
  name: string
  msg: string
  createTime: any
  photoURL: string
}

// eslint-disable-next-line react/display-name
const Chat = memo((props: chatProps) => {
  const { msg, createTime, name, sendid, photoURL } = props
  const signInUser = useAuth()
  const uid = signInUser.uid
  const babi = changeBabi(msg)
  const [isClicked, setIsClicked] = useState(false)
  const style = { margin: 0 }

  console.log('icon', photoURL)

  return (
    <div className={uid == sendid ? 'me' : 'you'}>
      {uid != sendid ? (
        <Avatar className='icon' src={photoURL} style={{ marginLeft: -10 }} />
      ) : (
        <p></p>
      )}
      <p className='says'>
        {isClicked ? <p {...{ style }}>{msg} </p> : <p {...{ style }}>{babi}</p>}
      </p>
      <p className='change' onClick={() => setIsClicked(!isClicked)}>
        {isClicked ? 'バビ語' : '翻訳'}
      </p>
    </div>
  )
})

export default Chat
