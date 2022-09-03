import React, { useState } from 'react'
import { useAuth } from '../../../firebase/authFunction'
import { changeBabi } from '../../../logic/babigo'
import './Chat.css'
import ChatRoom from './ChatRoom'

type chatProps = {
  sendid: string
  name: string
  msg: string
  createTime: any
}

const Chat = (props: chatProps) => {
  const { msg, createTime, name, sendid } = props
  const signInUser = useAuth()
  const uid = signInUser.uid
  const babi = changeBabi(msg)
  const [isClicked, setIsClicked] = useState(false)
  const style = { margin: 0 }

  return (
    <div className={uid == sendid ? 'me' : 'you'}>
      {uid != sendid ? <p> {name}</p> : <p></p>}
      <p className='says'>
        {isClicked ? <p {...{ style }}>{msg} </p> : <p {...{ style }}>{babi}</p>}
      </p>
      <p className='change' onClick={() => setIsClicked(!isClicked)}>
        {isClicked ? 'バビ語' : '翻訳'}
      </p>
    </div>
  )
}

export default Chat
