
import { addDoc, collection, doc, serverTimestamp, setDoc, Timestamp, updateDoc } from 'firebase/firestore';
import{ useEffect, useMemo, useState } from 'react'
import { db } from '../../firebase';
import { useAuth } from '../../firebase/authFunction';
import TimeLine from '../pages/TimeLine';
import Sidebar from '../sidebar/Sidebar';
import Chat from './Chat';
import './Message.css'

type ChatLog = {
  key: string,
  name: string,
  msg: string,
  createTime: any,
};

const Message = () => {

  const signInUser = useAuth()
  const displayName = signInUser.displayName
  const uid = signInUser.uid
  const [chatLogs, setChatLogs] = useState<any>([]);
  const [msg, setMsg] = useState('');

  const sendMsg = (e:any) => {
    e.preventDefault()

    const data: ChatLog = {
      key: uid,
      name: displayName,
      msg: msg,
      createTime: serverTimestamp()
    }

    console.log('sendmsg start!')
    const anotherId = 'O1ujIkBZmJWXwdZi3htg5yai14X2' // TODO：相手のidを入れる
    const chatroomRef = doc(db, 'users', uid, 'chatroom', anotherId);
    const chatsRef = collection(chatroomRef, 'chats')
    // const aiteRef = doc(db, 'users', anotherId, 'chatroom', uid);

    console.log(chatroomRef)

    addDoc(chatsRef, data)
    // setDoc(aiteRef, data)
    setMsg('')
  }


  return (
    <>
      {/* <Sidebar /> */}
      <div className='chat'>
        <form className='chatform'>
          {/* <div>{ userName }</div> */}
          <input
            placeholder='メッセージを入力'
            type='text'
            value={msg}
            onChange={(e) => setMsg(e.target.value)}
          />
          <button className='postBox-postButton' type='submit' onClick={sendMsg}>
          送信
          </button>
        </form>
      </div>
    </>
  );
};

export default Message
