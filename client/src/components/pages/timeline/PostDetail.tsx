import { useParams } from 'react-router-dom'
import GridItem from '../../ui/gridItem/GridItem'
import Header from '../../ui/header/Header'
import ReplyBox from '../../ui/input/post/ReplyBox'
import Post from './Post'
import './PostDetail.css'

const PostDetails = () => {
  const { postId } = useParams()

  return (
    <>
      <Header title='ポスト詳細' />
      <ReplyBox />
      <div className='timeline--block'></div>
    </>
  )
}

export default PostDetails
