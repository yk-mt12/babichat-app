import {
  collectionGroup,
  query,
  writeBatch,
  doc,
  serverTimestamp,
  getDoc,
  increment,
  getDocs,
  where,
} from 'firebase/firestore'
import { useState } from 'react'
import { db } from '../firebase'
import { useAuth } from '../firebase/authFunction'

type LikedUsersType = {
  userId: string
  createTime: any
}

type LikedPostType = {
  postId: string
  postRef: string
  createTime: any
  author: string
}

const useBatchPostLiked = () => {
  /**
   * TODO:postIdとpostDataの初期値をnullにしておくと、初回レンダリング時に、doc()のempty path errorが出てしまう。
   *下記の場合では、postData.authorの値が書き変わらない場合があり、その場合 postData.author/posts/postId に一致しないコレクションを参照するため、firebase errorになる。
   *対策
   *1.getAnotherPostData関数で、必ずpostData.authorが書き変わった状態で、checkLikedPost関数を呼び出す方法があると考える。
   *2.初期値を空白にしておき、useEffect内で if(postId == '' || postData.lenght < 1) return で抜ける。この場合、post.tsxで、returnに何も返さないため、エラーになる。
   * */
  const [postId, setPostId] = useState('cV9hJDJbRYIRQ8Ck0r9s')
  const [postData, setPostData] = useState<any>({
    author: 'users/H6IKIRLlFTYfEwYcPBwkyFznF4K2',
  })

  const signInUser = useAuth()
  const uid = signInUser.uid
  const userRef = doc(db, 'users', uid)
  const anotherUserRef = doc(db, postData.author)
  const postRef = doc(anotherUserRef, 'posts', postId)
  // users/anotherUserID/posts/postID/likedUser/signInUserID
  const likedUserRef = doc(postRef, 'likedUser', uid)
  // users/signInUserID/likedPosts/postID
  const likedPostRef = doc(userRef, 'likedPosts', postId)

  const getAnotherPostData = async () => {
    const q = query(collectionGroup(db, 'posts'), where('postId', '==', postId))

    const querySnapshot = await getDocs(q)
    const unsub = querySnapshot.forEach((doc) => {
      setPostData(doc.data())
    })
    return unsub
  }

  const checkPostIsLiked = async () => {
    console.log(postData.author, postId)
    const likedUserSnap = await getDoc(likedUserRef)
    const likedPostSnap = await getDoc(likedPostRef)

    if (likedUserSnap.exists() || likedPostSnap.exists()) {
      postUnliked()
    } else {
      postLiked()
    }
  }

  const postLiked = async () => {
    const batch = writeBatch(db)

    // users/anotherUserID/posts/postID/likedUser/signInUserID
    const likedUserData: LikedUsersType = {
      userId: uid,
      createTime: serverTimestamp(),
    }
    batch.set(likedUserRef, likedUserData)

    // users/signInUserID/likedPosts/postID
    const likedPostData: LikedPostType = {
      author: anotherUserRef.path,
      postId: postRef.id,
      postRef: postRef.path,
      createTime: serverTimestamp(),
    }
    batch.set(likedPostRef, likedPostData)

    batch.update(postRef, { likeCount: increment(1) })
    batch.update(userRef, { likePostCount: increment(1) })

    await batch
      .commit()
      .then(() => {
        console.log('いいね成功')
      })
      .catch((e) => {
        console.log('いいね失敗', e)
      })
  }

  const postUnliked = async () => {
    const batch = writeBatch(db)

    batch.delete(likedPostRef)
    batch.delete(likedUserRef)

    // console.log('batch delete完了')
    batch.update(postRef, { likeCount: increment(-1) })
    // console.log('batch /users/posts/likeCount -1 完了')
    batch.update(userRef, { likePostCount: increment(-1) })
    // console.log('batch /users/likePostCount -1 完了')

    await batch
      .commit()
      .then(() => {
        console.log('いいね削除成功')
      })
      .catch((e) => {
        console.log('いいね削除失敗', e)
      })
  }
  return { checkPostIsLiked, setPostId, getAnotherPostData }
}

export default useBatchPostLiked
