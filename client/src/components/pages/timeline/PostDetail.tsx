import Header from '../../ui/header/Header'
import ReplyBox from '../../ui/input/post/ReplyBox'
import './PostDetail.css'

const PostDetails = () => {
  return (
    <>
      <Header title='ポスト詳細' />
      <ReplyBox />
      <div className='timeline--block'></div>
    </>
  )
}

export default PostDetails
