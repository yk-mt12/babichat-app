import Post from '../post/Post'
import PostBox from '../post/PostBox'
import './Timeline.css'

import { db } from '../../firebase'
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import Sidebar from '../sidebar/Sidebar'

type PostType = {
  likedUser: any
  id: string
  displayName: string
  username: string
  verified: boolean
  text: string
  avater: string
  image: string
  likedUsers: string[]
}

const TimeLine = () => {
  // TODO: 型定義を正しく行う
  const [posts, setPosts] = useState<any>([])

  useEffect(() => {
    // let temp: any[] = []
    const postData = collection(db, 'posts')
    const q = query(postData, orderBy('timestamp', 'desc')) // 最新の投稿順に並び替える
    // リアルタイムでデータを取得
    onSnapshot(q, (querySnapshot) => {
      setPosts(querySnapshot.docs.map((doc) => doc.data()))
    })

    // TODO: ユニークキーをドキュメントから取得したい。以下のコメントアウトでpostsのデータを取得すると、postsのデータがデータベースに存在するデータより5倍ほど増える。
    // onSnapshot(q, (querySnapshot) => {
    //   querySnapshot.docs.map((doc) => {
    //     const data = doc.data()
    //     // console.log(data)
    //     temp.push({
    //       displayName: data.displayName,
    //       username: data.username,
    //       verified: data.verified,
    //       text: data.text,
    //       avater: data.avater,
    //       image: data.image,
    //       id: doc.id,
    //     })
    //     // console.log(temp)
    //   })
    //   setPosts(temp)
    // })
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
          key={post.text}
          displayName={post.displayName}
          username={post.username}
          verified={post.verified}
          text={post.text}
          avater={post.avater}
          image={post.image}
          // timestamp={post.timestamp}
          // likes={post.likedUser.length()}
        />
      ))}
    </div>
  )
}

export default TimeLine
