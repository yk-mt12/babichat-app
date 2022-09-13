import { Avatar } from '@mui/material'
import { memo, useState } from 'react'
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

  const sendTime = createTime.toDate()
  const send = formatDate(sendTime, 'HH:mm')

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
      <div className='help'>
        {uid != sendid ? (
          <>
            <p className='sendTime'>{send}</p>
            <p className='change' onClick={() => setIsClicked(!isClicked)}>
              {isClicked ? 'バビ語' : '翻訳'}
            </p>
          </>
        ) : (
          <>
            <p className='change' onClick={() => setIsClicked(!isClicked)}>
              {isClicked ? 'バビ語' : '翻訳'}
            </p>
            <p className='sendTime'>{send}</p>
          </>
        )}
      </div>
    </div>
  )
})

export default Chat
