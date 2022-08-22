import Post from '../post/Post'
import PostBox from '../post/PostBox'
import './Timeline.css'

import { db } from '../../firebase'
import {
  collection,
  collectionGroup,
  DocumentReference,
  getDocs,
  onSnapshot,
  orderBy,
  query,
  where,
} from 'firebase/firestore'
import { useEffect, useState } from 'react'

type PostType = {
  author: DocumentReference
  displayName: string
  text: string
  avater: string
  image: string
  createTime: string
  updateTime: string
  likedCount: number
  postId: string
}

const TimeLine = () => {
  // TODO: 型定義を正しく行う
  const [posts, setPosts] = useState<any>([])

  useEffect(() => {
    const q: any = query(collectionGroup(db, 'posts'), orderBy('createTime', 'desc'))
    // 最新の投稿順に並び替える
    // リアルタイムでデータを取得
    onSnapshot(q, (querySnapshot: { docs: any[] }) => {
      setPosts(querySnapshot.docs.map((doc: { data: () => any }) => doc.data()))
    })
  }, [])

  return (
    <div className='timeline'>
      {/* Header */}
      <div className='timeline--header'>
        <h2>Post</h2>
      </div>
      {/* PostBox */}
      <PostBox />
      {/* Post */}

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
          likedCount={post.likedCount}
          postId={post.postId}
        />
      ))}
    </div>
  )
}

export default TimeLine
