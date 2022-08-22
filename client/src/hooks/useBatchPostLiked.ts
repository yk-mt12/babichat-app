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
  getDoc,
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
  const [postId, setPostId] = useState('cV9hJDJbRYIRQ8Ck0r9s')
  const [postData, setPostData] = useState<any>([])
  const signInUser = useAuth()
  const uid = signInUser.uid
  const userRef = doc(db, 'users', uid)
  const postRef = doc(userRef, 'posts', postId)
  const likedUserRef = doc(postRef, 'likedUser', uid)
  const likedPostRef = doc(userRef, 'likedPosts', postId)

  const checkPostIsLiked = async () => {
    console.log('checkPostIsLiked:')
    const likedUserSnap = await getDoc(likedUserRef)
    const likedPostSnap = await getDoc(likedPostRef)
    const postSnap = await getDoc(postRef)
    if (postSnap.exists()) {
      setPostData(postSnap.data())
    }

    if (likedUserSnap.exists() && likedPostSnap.exists()) {
      postUnliked()
    } else {
      postLiked()
    }
  }

  const postLiked = async () => {
    const batch = writeBatch(db)

    batch.set(likedUserRef, {
      userId: userRef.id,
      createTime: serverTimestamp(),
    })

    batch.set(likedPostRef, {
      author: userRef.path,
      postId: postRef.id,
      postRef: postRef.path,
      createTime: serverTimestamp()
    })

    await batch
      .commit()
      .then(() => {
        console.log('いいね成功')
      })
      .catch((e) => {
        console.log('いいね失敗')
      })
  }

  const postUnliked = async () => {
    const batch = writeBatch(db)

    batch.delete(likedPostRef)
    batch.delete(likedUserRef)

    await batch.commit()
  }

  return { checkPostIsLiked, postLiked, postUnliked, setPostId }
}

export default useBatchPostLiked
