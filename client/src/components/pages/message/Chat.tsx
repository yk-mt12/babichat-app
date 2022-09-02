import React from 'react'
import { useAuth } from '../../../firebase/authFunction'
import { changeBabi } from '../../../logic/babigo'
import './Chat.css'

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
  return (
    <div className={uid == sendid ? 'me' : 'you'}>
      {uid != sendid ? <p>送信者</p> : <p></p>}
      <p className='says'>{babi}</p>
    </div>
  )
}

export default Chat
