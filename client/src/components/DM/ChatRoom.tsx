import { collection, limit, onSnapshot, orderBy, query } from 'firebase/firestore'
import { useEffect, useRef, useState } from 'react'
import { db } from '../../firebase'
import { useAuth } from '../../firebase/authFunction'
import Sidebar from '../sidebar/Sidebar'
import Chat from './Chat'
import Message from './MessageBox'
import './ChatRoom.css'

type chatProps = {
    key: string
    name: string
    msg: string
    createTime: any
}

const ChatRoom = () => {
    const [chats, setChats] = useState<any>([])
    const signInUser = useAuth()
    const uid = signInUser.uid

    useEffect(() => {
        const anotherId = 'O1ujIkBZmJWXwdZi3htg5yai14X2' // TODO：相手のidを入れる

        const chatroomRef = collection(db, 'users', uid, 'chatroom', anotherId, 'chats');
        const q = query(chatroomRef, orderBy('createTime'), limit(50))
        const unsub = onSnapshot(q , (querySnapshot) => {
            setChats(
                querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
            );
        });
    }, []);

    return (
        <div className='chatroom'>
            <Sidebar />
            <div className='chat'>
                <div className='header'>
                    <h2>ChatRoom</h2>
                </div>
                <div className='chat-screen'
                    style={{
                        width: '1000px',
                        height: '600px',
                        overflow: 'scroll',
                    }}
                >
                    <div className='message'>
                        {chats.map((chat: chatProps) => (
                            // eslint-disable-next-line react/jsx-key
                            <Chat
                            name={chat.name}
                            msg={chat.msg}
                            createTime={chat.createTime}
                            key={chat.key}
                            />
                        ))}
                    </div>
                </div>
                <div className='input-form'>
                    <Message />
                </div>
            </div>
        </div>
    )
}

export default ChatRoom

