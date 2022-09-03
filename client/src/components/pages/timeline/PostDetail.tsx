import React from 'react'
import { useParams } from 'react-router-dom'
import GridItem from '../../ui/gridItem/GridItem'
import Header from '../../ui/header/Header'

const PostDetails = () => {
  const { postId } = useParams()

  return (
    <>
      <Header title={`${postId}`} />
      <GridItem colRatio={12} width='100vh' height='80vh' />
    </>
  )
}

export default PostDetails
