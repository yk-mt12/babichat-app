import { useMemo, useEffect, useState } from 'react'
import { user } from 'firebase-functions/v1/auth'
import {
  collection,
  collectionGroup,
  DocumentReference,
  query,
  Timestamp,
  writeBatch,
  doc,
  serverTimestamp,
  setDoc,
} from 'firebase/firestore'
import { db } from '../firebase'
import { useAuth } from '../firebase/authFunction'

type LikedUsers = {
  id: string
  name?: string
  createTime: any
}

type LikedPost = {
  id: string
  postRef: DocumentReference
  createTime: any
  title?: string
  text?: string
  author?: DocumentReference
}

const useBatchPostLiked = () => {
  console.log('useBatchPostLiked 開始')
  const [postId, setPostId] = useState('cV9hJDJbRYIRQ8Ck0r9s')
  const signInUser = useAuth()
  const uid = signInUser.uid
  const userRef = doc(db, 'users', uid)
  const postRef = doc(userRef, 'posts', postId)
  const likedUserRef = doc(postRef, 'likedUser', uid)
  const likedPostRef = doc(userRef, 'likedPosts', postId)

  const postLiked = async () => {
    const batch = writeBatch(db)

    batch.set(likedUserRef, {
      id: userRef.id,
      createTime: serverTimestamp(),
    })

    batch.set(likedPostRef, {
      id: postRef.id,
      postRef: postRef,
      createTime: serverTimestamp(),
    })

    await batch.commit()
  }

  const postUnliked = async () => {
    const batch = writeBatch(db)

    batch.delete(likedPostRef)
    batch.delete(likedUserRef)

    await batch.commit()
  }

  return { postLiked, postUnliked, setPostId }
}

export default useBatchPostLiked
