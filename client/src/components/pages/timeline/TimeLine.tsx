import { collectionGroup, DocumentReference, onSnapshot, orderBy, query } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { db } from '../../../firebase'
import Post from './Post'
import Header from '../../ui/header/Header'
import PostBox from '../../ui/input/post/PostBox'

import './TimeLine.css'

type PostType = {
  author: DocumentReference
  displayName: string
  text: string
  avater: string
  image: string
  createTime: string
  updateTime: string
  likeCount: number
  postId: string
}

const TimeLine = () => {
  // TODO: 型定義を正しく行う
  const [posts, setPosts] = useState<any>([])
  const location = useLocation()

  useEffect(() => {
    const q: any = query(collectionGroup(db, 'posts'), orderBy('createTime', 'desc'))
    // 最新の投稿順に並び替える
    // リアルタイムでデータを取得
    onSnapshot(q, (querySnapshot: { docs: any[] }) => {
      setPosts(querySnapshot.docs.map((doc) => doc.data()))
    })
  }, [])

  return (
    <div className='timeline'>
      <Header title='Post' />
      {location.pathname != '/home' && <PostBox />}

      <div className={location.pathname !== '/home' ? 'timeline--block' : ''}>
        {posts.map((post: PostType) => (
          <Post
            key={post.postId}
            author={post.author}
            displayName={post.displayName}
            text={post.text}
            avater={post.avater}
            image={post.image}
            createTime={post.createTime}
            updateTime={post.updateTime}
            likeCount={post.likeCount}
            postId={post.postId}
          />
        ))}
      </div>
    </div>
  )
}

export default TimeLine
