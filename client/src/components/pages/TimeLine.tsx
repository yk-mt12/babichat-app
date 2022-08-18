import Post from '../post/Post'
import PostBox from '../post/PostBox'
import './Timeline.css'

import { db } from '../../firebase'
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore'
import { useEffect, useState } from 'react'

type PostType = {
  uid: string
  displayName: string
  username: string
  verified: boolean
  text: string
  avater: string
  image: string
  createTime: string
  updateTime: string
  likedCount: number
  likedUsers: string[]
}

const TimeLine = () => {
  // TODO: 型定義を正しく行う
  const [posts, setPosts] = useState<any>([])

  useEffect(() => {
    const postData = collection(db, 'posts')
    const q = query(postData, orderBy('createTime', 'desc')) // 最新の投稿順に並び替える
    // リアルタイムでデータを取得
    onSnapshot(q, (querySnapshot) => {
      setPosts(querySnapshot.docs.map((doc) => doc.data()))
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
          uid={post.uid}
          key={post.text}
          displayName={post.displayName}
          username={post.username}
          verified={post.verified}
          text={post.text}
          avater={post.avater}
          image={post.image}
          createTime={post.createTime}
          updateTime={post.updateTime}
          likedCount={post.likedCount}
          likedUsers={post.likedUsers}
        />
      ))}
    </div>
  )
}

export default TimeLine
