import Post from './Post'
import PostBox from './PostBox'
import './Timeline.css'

import db from '../../firebase'
import { collection, getDocs } from 'firebase/firestore'
import { useEffect, useState } from 'react'

const TimeLine = () => {
  // TODO: 型定義を正しく行う
  const [posts, setPosts] = useState<any>([])

  useEffect(() => {
    const postData = collection(db, 'posts')
    getDocs(postData).then((querySnapshot) => {
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
      {posts.map((post: any) => (
        <Post
          key={post.text}
          displayName={post.displayName}
          username={post.username}
          verified={post.verified}
          text={post.text}
          avater={post.avater}
          image={post.image}
        />
      ))}
    </div>
  )
}

export default TimeLine
