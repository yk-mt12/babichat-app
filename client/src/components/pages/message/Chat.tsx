import React from 'react'
import { useAuth } from '../../../firebase/authFunction'
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
    console.log('ユーザーid', uid)
    console.log('sendid', sendid)
    return (
        <div className={uid == sendid ? 'me': 'you'}>
            <p>私</p>
            <p className='says'>{msg}</p>
        </div>
    )
}

export default Chat