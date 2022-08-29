/* eslint-disable react/jsx-key */
import { collection, limit, onSnapshot, orderBy, query } from 'firebase/firestore'
import { useEffect, useRef, useState } from 'react'
import { db } from '../../../firebase'
import { useAuth } from '../../../firebase/authFunction'
// import Sidebar from '../../sidebar/Sidebar'
import Chat from './Chat'
import MessageBox from './MessageBox'
import './ChatRoom.css'
import { Grid } from '@mui/material'
import { useLocation, useParams } from 'react-router-dom'

type chatProps = {
    sendid: string
    name: string
    msg: string
    createTime: any
}

const ChatRoom = () => {
    const [chats, setChats] = useState<any>([])
    // const { search } = useLocation();
    const { anotherId } = useParams();
    const signInUser = useAuth()
    const uid = signInUser.uid

    useEffect(() => {
        // const anotherId = new URLSearchParams(search).get('anotherId') as string
        // console.log(anotherId, search) // 'O1ujIkBZmJWXwdZi3htg5yai14X2' // TODO：相手のidを
        const chatroomRef = collection(db, 'users', uid, 'chatroom', anotherId||'', 'chats');
        const q = query(chatroomRef, orderBy('createTime'), limit(500))
        const unsub = onSnapshot(q , (querySnapshot) => {
            setChats(
                querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
            );

            const chatscreen = document.querySelector('.chat-screen')
            if(chatscreen)
                chatscreen.scrollTop = chatscreen.scrollHeight;
        });
        return () => unsub()
    }, []);



    return (
        <div className='chatroom'>
            {/* <Sidebar /> */}
            <div>
                <Grid container className='chat'>
                    <Grid item xs={12} className='header'>
                        <h2>Massage</h2>
                    </Grid>

                    <Grid item xs={12} md={8}>
                        <div className='chat-screen'
                        style={{
                            overflow: 'auto',
                        }}>
                            <div className='message' id='chatBottom' >
                                {chats.map((chat: chatProps) => (
                                    <Chat
                                    name={chat.name}
                                    msg={chat.msg}
                                    createTime={chat.createTime}
                                    sendid={chat.sendid}
                                    />
                                ))}
                            </div>
                        </div>
                        <div className='input-form'>
                            <MessageBox />
                        </div>
                    </Grid>
                    <Grid item xs={4} className='history'>
                        <div className='history-title'>
                            <p>履歴</p>
                        </div>
                    </Grid>
                </Grid>
            </div>


        </div>
    )
}

export default ChatRoom
