import React from 'react'
import Post from './Post'
import PostBox from './PostBox'
import './Timeline.css'

const TimeLine = () => {
  return (
    <div className='timeline'>
      {/* Header */}
      <div className='timeline--header'>
        <h2>Post</h2>
      </div>
      {/* PostBox */}
      <PostBox />
      {/* Post */}
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  )
}

export default TimeLine
