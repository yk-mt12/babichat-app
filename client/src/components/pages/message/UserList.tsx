import { Grid } from '@mui/material'
import { collection, onSnapshot, query } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
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
    const location = useLocation()

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