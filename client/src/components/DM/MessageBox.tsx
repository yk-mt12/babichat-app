
import { addDoc, collection, doc, serverTimestamp } from 'firebase/firestore';
import{ useState } from 'react'
import { useForm } from 'react-hook-form';
import { db } from '../../firebase';
import { useAuth } from '../../firebase/authFunction';
import SendIcon from '@mui/icons-material/Send';


type ChatLog = {
  key: string,
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

    console.log(chatroomRef)
    if(msg === '') {
      console.log('メッセージは空です')
      return
    }
    addDoc(chatsRef, data)
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
              marginLeft: '5px',
              marginBottom: '-3px',
            }}

            placeholder='メッセージを入力'
            type='text'
            value={msg}
            onChange={(e) => setMsg(e.target.value)}

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
