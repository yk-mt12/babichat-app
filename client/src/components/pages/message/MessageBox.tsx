
import { addDoc, collection, doc, serverTimestamp } from 'firebase/firestore';
import{ useState } from 'react'
import { db } from '../../../firebase';
import { useAuth } from '../../../firebase/authFunction';
import SendIcon from '@mui/icons-material/Send';
import { useParams } from 'react-router-dom';
import PostBox from '../../ui/input/post/PostBox';


type ChatLog = {
  sendid: string,
  name: string,
  msg: string,
  createTime: any,
};

const MessageBox = () => {
  // const { register, handleSubmit } = useForm();
  const signInUser = useAuth()
  const displayName = signInUser.displayName
  const uid = signInUser.uid
  const [msg, setMsg] = useState('');
  const { anotherId } = useParams();

  const sendMsg = (e:any) => {
    e.preventDefault()

    const data: ChatLog = {
      sendid: uid,
      name: displayName,
      msg: msg,
      createTime: serverTimestamp()
    }

    // const anotherId = 'O1ujIkBZmJWXwdZi3htg5yai14X2' // TODO：相手のidを入れる
    const chatroomRef = doc(db, 'users', uid, 'chatroom', anotherId||'');
    const chatsRef = collection(chatroomRef, 'chats')

    const receiveChatroomRef = doc(db, 'users', anotherId||'', 'chatroom', uid);
    const receiveChatsRef = collection(receiveChatroomRef, 'chats')

    // console.log(chatroomRef)
    if(msg === '') {
      console.log('メッセージは空です')
      return
    }
    addDoc(chatsRef, data)
    addDoc(receiveChatsRef, data)
    setMsg('')
  }


  return (
    <>
      <div className='chat'>
        <form className='chatform'
          onSubmit={sendMsg}>
          <input
            style={{
              width: '78%',
              fontSize: '15px',
              fontWeight: '550',
              marginBottom: '-3px',
            }}

            placeholder='新しいメッセージの作成'
            type='text'
            value={msg}
            onChange={(e) => setMsg(e.target.value)}
            className='input-box'
          />
          <SendIcon
            style={{
              marginLeft: '20px',
              marginBottom: '-5px',
            }}
            className='postBox-postButton'
            type='submit'
            onClick={sendMsg}
            />
        </form>
      </div>
    </>
  );
};

export default MessageBox
