/* eslint-disable react/jsx-no-comment-textnodes */
import { useAuth } from '../../../firebase/authFunction'
import { useNavigate } from 'react-router-dom'
import { Avatar } from '@mui/material'
import { memo } from 'react'
import './User.css'

type Props = {
  userlist: any
}

type PostType = {
  key: string
  uid: string
  displayName: string
  photoURL: string
}

// eslint-disable-next-line react/display-name
const User = memo((props: Props) => {
  const { userlist } = props
  const uid = useAuth().uid
  const history = useNavigate()

  const move = (user: string) => {
    const anotherId = user
    history(`/chatroom/${anotherId}`) // 画面遷移
  }

  return (
    <>
      {userlist &&
        userlist.map(
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
})

export default User
