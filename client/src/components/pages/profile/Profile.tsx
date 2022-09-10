import React, { useEffect, useState } from 'react'
import { Avatar, Grid } from '@mui/material'
import GridItem from '../../ui/gridItem/GridItem'
import './Profile.css'
import Header from '../../ui/header/Header'
import { useAuth } from '../../../firebase/authFunction'
import {
  query,
  orderBy,
  collection,
  onSnapshot,
  limit,
  DocumentReference,
  doc,
  getDocs,
} from 'firebase/firestore'
import { db } from '../../../firebase'
import Post from '../timeline/Post'

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

const profile = () => {
  const signInUser = useAuth()
  const [posts, setPosts] = useState<any>([])

  useEffect(() => {
    const getDoc = async () => {
      const docRef = collection(db, 'users', signInUser.uid, 'posts')
      const q = query(docRef)

      const unsub = onSnapshot(q, (querySnapshot: { docs: any[] }) => {
        setPosts(querySnapshot.docs.map((doc) => doc.data()))
      })
      return () => unsub()

      // const snapShot = await getDocs(q)

      // snapShot.forEach((doc) => {
      //   setPosts(doc.data())
      // })
    }

    getDoc()
  }, [])

  return (
    <>
      <div className='profile-screen'>
        <Header title='ぷろふぃーる' />
        <div className='profile'>
          <Grid container direction='row' justifyContent='flex-start' alignItems='center'>
            <Grid item xs={0.5}></Grid>
            <Grid item xs={1.7}>
              <Avatar
                src={signInUser.photoURL}
                style={{ marginTop: 0 }}
                sx={{ width: 100, height: 100 }}
              />
              {/* sx={{width: 60, height: 60}} */}
            </Grid>
            <Grid item xs={8}>
              <p className='name'>{signInUser.displayName}</p>
              {/* <GridItem label='自己紹介' colRatio={2}/> */}
            </Grid>
          </Grid>
          <Grid container direction='row' justifyContent='flex-start' alignItems='center'>
            <Grid item xs={2.2}></Grid>
            <Grid item xs={8}>
              <GridItem label='自己紹介' colRatio={2} />
              <GridItem label='初めまして！' colRatio={undefined} width={300} height={200} />
            </Grid>
          </Grid>
        </div>

        <Grid>
          <Grid item xs={12} className='post-timeline'>
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
          </Grid>
        </Grid>

        {/* <div className='post-timeline'>
        {posts.map((post: any) => (
            <p key={post.key}>{post.text}</p>
        ))}
        </div> */}
      </div>
    </>
  )
}

export default profile
