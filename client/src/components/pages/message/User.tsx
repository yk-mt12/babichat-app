/* eslint-disable react/jsx-no-comment-textnodes */
import { useAuth } from '../../../firebase/authFunction'
import './User.css'
import { useNavigate } from 'react-router-dom'
import { Avatar } from '@mui/material'

type Props = {
  postsArray: any
}

type PostType = {
  key: string
  uid: string
  displayName: string
  photoURL: string
}

function User(props: Props) {
  const { postsArray } = props
  // const [ anotherId, setAnotherId ] = useState('');
  const uid = useAuth().uid
  const history = useNavigate()

  const move = (user: string) => {
    const anotherId = user
    history(`/chatroom/${anotherId}`) // 画面遷移
  }

  return (
    <>
      {postsArray &&
        postsArray.map(
          (post: PostType) =>
            post.uid === uid || (
              <div className='user-info'>
                <Avatar src={post.photoURL} style={{ marginTop: 10 }} />
                <p className='username' onClick={() => move(post.uid)}>
                  {post.displayName}
                </p>
              </div>
            ),
        )}
    </>
  )
}

export default User
