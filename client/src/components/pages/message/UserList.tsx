import { Grid } from '@mui/material'
import { getAuth } from 'firebase/auth'
import { collection, collectionGroup, onSnapshot, query } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { db } from '../../../firebase'
import Header from '../../ui/header/Header'
import User from './User'
import './UserList.css'

type Props = {
    uid: string,
    userName: string
}

function UserList() {
    const [users, setUsers] = useState<any>([]);

    useEffect(() => {
        const q: any = query(collection(db, 'users'))
        onSnapshot(q, (querySnapshot: { docs: any[] }) => {
            setUsers(querySnapshot.docs.map((doc) => doc.data()))
        })
    }, []);
    const userArray = users

    return (
        <>
            {location.pathname === '/chatroom' ? (
                <>
                <Header title='ChatRoom' />
                <Grid item xs={12} className='grid history'>

                    <div className='history-title'>
                        <p>ユーザー一覧</p>
                        <User postsArray={ userArray } />
                    </div>
                </Grid>
                </>
            ):
            <Grid item xs={4} className='grid history'>

                <div className='history-title'>
                    <p>ユーザー一覧</p>
                    <User postsArray={ userArray } />
                </div>
            </Grid>
            }

        </>


    )
}

export default UserList