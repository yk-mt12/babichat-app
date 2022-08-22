import { doc, collection, getDoc, onSnapshot } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { db } from '../../firebase'
import { useAuth } from '../../firebase/authFunction'
import Sidebar from '../sidebar/Sidebar'
import Chat from './Chat'
import Message from './Message'

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
    // console.log(uid)
    useEffect(() => {
        const anotherId = 'O1ujIkBZmJWXwdZi3htg5yai14X2' // TODO：相手のidを入れる

        const chatroomRef = collection(db, 'users', uid, 'chatroom', anotherId, 'chats');
        // const chatsRef = collection(chatroomRef, 'chats')
        // console.log(chatsRef)

        // const docSnap = await getDoc(chatsRef)
        // setChats(docSnap.data())
        const unsub = onSnapshot(chatroomRef, (querySnapshot) => {
            setChats(
                querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
            );
        });
        console.log(chats)
    }, []);


    return (
        <div className='chatroom'>
            <div className='header'>
                <h2>ChatRoom</h2>
            </div>
            <Sidebar />
            {chats.map((chat: chatProps) => (
            // eslint-disable-next-line react/jsx-key
            <Chat
                name={chat.name}
                msg={chat.msg}
                createTime={chat.createTime}
                key={chat.key}
            />
            ))}
            <Message />
        </div>
    )
}

export default ChatRoom

