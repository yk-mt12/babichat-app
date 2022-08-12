import { Button } from '@mui/material'
import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'

const PostBox = () => {
  return (
    <div className='postBox'>
      <form>
        <AccountCircleIcon />
        <input placeholder='今どうしてる？' type='text' />
        <input
          className='postBox--imageInput'
          placeholder='画像のURLを入力してください'
          type='text'
        />
        <Button className='postBox-postButton' type='submit'>
          投稿する
        </Button>
      </form>
    </div>
  )
}

export default PostBox
