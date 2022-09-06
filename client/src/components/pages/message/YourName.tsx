import { collection, getDoc, getDocs, onSnapshot, query } from 'firebase/firestore'
import React, { memo, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { db } from '../../../firebase'

type PostType = {
    key: string
    uid: string
    displayName: string
}

// eslint-disable-next-line react/display-name
const YourName = memo(() => {
    const [users, setUsers] = useState<any>([])
    const { anotherId } = useParams()

    useEffect(() => {
        const q: any = query(collection(db, 'users'))
        const unsub = onSnapshot(q, (querySnapshot: { docs: any[] }) => {
            setUsers(querySnapshot.docs.map((doc) => doc.data()))
        })

    return () => unsub()
    }, [])

    const userList = users

    return (
        <>
            {userList &&
                userList.map(
                    (post: PostType) =>
                        post.uid === anotherId && (
                            <div>{post.displayName}</div>
                        ),
                )
            }
        </>
    )
});

export default YourName

