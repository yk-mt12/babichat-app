import { useAuth } from '../../../firebase/authFunction'
import './User.css'
import { useNavigate } from 'react-router-dom';

type Props = {
    postsArray: any
}

type PostType = {
    key: string
    uid: string
    displayName: string
    icon : string
}

function User(props: Props) {
    const { postsArray } = props
    // const [ anotherId, setAnotherId ] = useState('');
    const uid = useAuth().uid
    const history = useNavigate();

    const move = (user: string) => {
        const anotherId = user
        history(`/chatroom/${anotherId}`); // 画面遷移
    }

    return (
        <div className='user'>
            {postsArray &&
            postsArray.map((post: PostType) => (
                (
                    post.uid === uid ||
                    <>
                        <p className='username' onClick={() => move(post.uid)}>{post.displayName}</p>
                    </>
                )
            ))}
        </div>
    )
}

export default User