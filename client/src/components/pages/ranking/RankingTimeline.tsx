import { DocumentReference } from 'firebase/firestore'
import React from 'react'
import RankingPost from './RankingPost'

type Props = {
  postsArray: any
}

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

const RankingPostTimeline = (props: Props) => {
  const { postsArray } = props

  return (
    <div>
      {postsArray &&
        postsArray.map((post: PostType, rank: number) => (
          <RankingPost
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
            rank={rank + 1}
          />
        ))}
             </div>
  )
}

export default RankingPostTimeline
