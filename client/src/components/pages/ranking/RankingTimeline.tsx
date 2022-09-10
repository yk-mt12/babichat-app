import { DocumentReference } from 'firebase/firestore'
import React from 'react'
import Fluid from '../../ui/background/Fluid'
import RankingPost from './RankingPost'
import './RankingTimeline.css'

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
    <>
      <div>
        <h3 className='good'>いいね数</h3>
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
      <Fluid />
    </>
  )
}

export default RankingPostTimeline
