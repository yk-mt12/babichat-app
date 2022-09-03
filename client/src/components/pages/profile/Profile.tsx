import React, { useEffect, useState } from 'react'
import { Avatar, Grid } from '@mui/material'
import GridItem from '../../ui/gridItem/GridItem'
//import Sidebar from '../sidebar/Sidebar'
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

const profile = () => {
  const signInUser = useAuth()
  const [posts, setPosts] = useState<any>([])

  useEffect(() => {
    const getDoc = async () => {
      const docRef = collection(db, 'users', signInUser.uid, 'posts')
      const q = query(docRef)
      const snapShot = await getDocs(q)

      snapShot.forEach((doc) => {
        setPosts(doc.data())
      })
    }

    getDoc()
  }, [])

  return (
    // <div className='profile-screen'>
    //   <div className='profile-logo'>Profile</div>
    //   <Grid container spacing={1} className='box'>
    //     <img className='icon' src='https://iconbu.com/wp-content/uploads/2020/01/%E3%83%9A%E3%83%B3%E3%82%AE%E3%83%B3%E3%81%AE%E3%82%A2%E3%82%A4%E3%82%B3%E3%83%B3.jpg'></img>
    //     <ul>
    //       <li className='box1-list user-name'>ユーザ名</li>
    //       <li className='box1-list'>ID</li>
    //     </ul>
    //     <div className='self-introduction'>自己紹介</div>
    //     <div className='box1-1'></div>
    //   </Grid>
    //   <Grid container spacing={1} className='box'>
    //     <ul className='post-list'>
    //       <li className='box2-list'>全ての投稿</li>
    //       <li className='box2-list'>返信</li>
    //     </ul>
    //   </Grid>
    // </div>

    // <Header title='チャバットボ' />
    <div className='profile-screen'>
      <Grid container direction='row' justifyContent='flex-start' alignItems='center'>
        <Grid item xs={3}>
          {/* <div className='box'>
            {/* <img className='icon' src='https://iconbu.com/wp-content/uploads/2020/01/%E3%83%9A%E3%83%B3%E3%82%AE%E3%83%B3%E3%81%AE%E3%82%A2%E3%82%A4%E3%82%B3%E3%83%B3.jpg'></img>
              <ul>
                <li className='box1-list user-name'>ユーザ名</li>
                <li className='box1-list'>ID</li>
              </ul>
            <div className='self-introduction'>自己紹介</div>
            <div className='box1-1'></div>
            </div> */}

          <p>box1</p>
          {/* <img className='icon' src='https://iconbu.com/wp-content/uploads/2020/01/%E3%83%9A%E3%83%B3%E3%82%AE%E3%83%B3%E3%81%AE%E3%82%A2%E3%82%A4%E3%82%B3%E3%83%B3.jpg'></img> */}
          <Avatar src={signInUser.photoURL} style={{ marginTop: 10 }} />
        </Grid>
        <Grid item xs={8}>
          <p>{signInUser.displayName}</p>
          <GridItem label='自己紹介' colRatio={2} />
        </Grid>
      </Grid>
      {/* <div className='post-timeline'>
        {posts.map((post: any) => (
            <p key={post.key}>{post.text}</p>
        ))}
      </div> */}
    </div>
  )
}

export default profile
