import { Grid } from '@mui/material'
import { collection, onSnapshot, query } from 'firebase/firestore'
import { memo, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { db } from '../../../firebase'
import Header from '../../ui/header/Header'
import User from './User'
import './UserList.css'

// eslint-disable-next-line react/display-name
const UserList = memo(() => {
  const [users, setUsers] = useState<any>([])
  const location = useLocation()

  useEffect(() => {
    const q: any = query(collection(db, 'users'))
    const unsub = onSnapshot(q, (querySnapshot: { docs: any[] }) => {
      setUsers(querySnapshot.docs.map((doc) => doc.data()))
    })

    return () => unsub()
  }, [])

  const userlist = users

  return (
    <>
      {location.pathname === '/chatroom' || location.pathname === '/home' ? (
        <>
          <Header title='ちゃっとるーむ' />
          <Grid item xs={12} className={`${location.pathname !== '/home' && 'userlist'}`}>
            {location.pathname === '/home' || (
              <div className='userlist-title'>
                <p>ゆーざーりすと</p>
              </div>
            )}
            <User userlist={userlist} />
          </Grid>
        </>
      ) : (
        // ユーザリストのみを表示
        <Grid item xs={4} className='userlist'>
          <div className='userlist-title'>
            <p>ゆーざーりすと</p>
          </div>
          <div>
            <User userlist={userlist} />
          </div>
        </Grid>
      )}
    </>
  )
})

export default UserList
