import { Avatar } from '@mui/material'
import React, { memo, useState } from 'react'
import { useAuth } from '../../../firebase/authFunction'
import { changeBabi } from '../../../logic/babigo'
import formatDate from '../../../logic/formatDate'
import './Chat.css'

type chatProps = {
  sendid: string
  name: string
  msg: string
  createTime: any
  photoURL: string
}

// eslint-disable-next-line react/display-name
const Chat = memo((props: chatProps) => {
  const { msg, createTime, sendid, photoURL } = props
  const signInUser = useAuth()
  const uid = signInUser.uid
  const babi = changeBabi(msg)
  const [isClicked, setIsClicked] = useState(false)
  const style = { margin: 0 }
  const send = formatDate(createTime ,'MM/dd HH:mm')

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
      <p>{send}</p>
    </div>
  )
})

export default Chat
