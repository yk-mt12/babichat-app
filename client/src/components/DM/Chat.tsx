import React from 'react'
import { useAuth } from '../../firebase/authFunction'
import './Chat.css'


type chatProps = {
    key: string
    name: string
    msg: string
    createTime: any
}

const Chat = (props: chatProps) => {
    const { msg, createTime, name, key } = props
    const signInUser = useAuth()
    const uid = signInUser.uid
    return (
        <div className={uid === key ? 'me': 'you'}>
            <p>私</p>
            <p className='says'>{msg}</p>
        </div>
    )

}

export default Chat