import { Grid } from '@mui/material'
import { collection, onSnapshot, query } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { db } from '../../../firebase'
import Header from '../../ui/header/Header'
import User from './User'
import './UserList.css'

function UserList() {
  const [users, setUsers] = useState<any>([])
  const location = useLocation()

  useEffect(() => {
    const q: any = query(collection(db, 'users'))
    onSnapshot(q, (querySnapshot: { docs: any[] }) => {
      setUsers(querySnapshot.docs.map((doc) => doc.data()))
    })
  }, [])

  const userArray = users

  return (
    <>
      {location.pathname === '/chatroom' || location.pathname === '/home' ? (
        <>
          <Header title='ChatRoom' />
          <Grid item xs={12} className={`${location.pathname !== '/home' && 'grid history'}`}>
            {location.pathname === '/home' || (
              <div className='history-title-only'>
                <p>ユーザーリスト</p>
              </div>
            )}
            <div className='userlist-only'>
              <User postsArray={userArray} />
            </div>
          </Grid>
        </>
      ) : (
        <Grid item xs={4} className='grid history'>
          <div className='history-title'>
            <p>ユーザーリスト</p>
          </div>
          <div className='userlist'>
            <User postsArray={userArray} />
          </div>
        </Grid>
      )}
    </>
  )
}

export default UserList
