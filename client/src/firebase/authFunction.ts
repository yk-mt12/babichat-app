import { serverTimestamp, doc, setDoc, getDoc } from 'firebase/firestore'
import { useEffect } from 'react'
import { useRecoilState, useResetRecoilState } from 'recoil'
import { signInUserState } from '../store/auth'
import { auth, db } from '.'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  signInAnonymously,
} from 'firebase/auth'

/**
 * ユーザー認証する
 */
export const signIn = async (email: string, password: string) => {
  try {
    await signInWithEmailAndPassword(auth, email, password)
  } catch (error) {
    alert('サインイン認証に失敗しました。')
  }
}

/**
 * ユーザー登録する
 */
export const signUp = async (email: string, password: string) => {
  try {
    await createUserWithEmailAndPassword(auth, email, password)
  } catch (error) {
    alert('ユーザー登録に失敗しました。')
  }
}

/**
 * サインアウトする
 */
export const logout = async () => {
  try {
    await signOut(auth)
  } catch (error) {
    alert('サインアウトに失敗しました。')
  }
}

/**
 * SignInの状態を監視する
 */

export const useAuth = () => {
  const [signInUser, setSignInUser] = useRecoilState(signInUserState)
  const resetStatus = useResetRecoilState(signInUserState)

  useEffect(() => {
    const unSub = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        setSignInUser({
          uid: authUser.uid,
          displayName: authUser.displayName,
          photoURL: authUser.photoURL,
          createTime: serverTimestamp(),
          updateTime: serverTimestamp(),
        })
      } else {
        resetStatus()
      }
    })

    return () => unSub()
  }, [setSignInUser, resetStatus])

  return signInUser
}

// type UserType = {
//   name: string
//   photoUrl: string
//   createTime: string
//   updateTime: string
//   likePostCount: number
// }

export const createUsersDB = async () => {
  auth.onAuthStateChanged(async (authUser) => {
    // 未ログイン時
    if (!authUser) {
      // 匿名ログインする
      signInAnonymously(auth)
    }
    // ログイン時
    else {
      // ログイン済みのユーザー情報があるかをチェック
      const userRef = doc(db, 'users', authUser.uid)
      const userDoc = await getDoc(userRef)
      if (!userDoc.exists()) {
        // Firestore にユーザー用のドキュメントが作られていなければ作る
        await setDoc(doc(db, 'users', authUser.uid), {
          createTime: serverTimestamp(),
          displayName: 'ログインユーザ',
          likePostCount: 0,
          photoURL: authUser.photoURL ? authUser.photoURL : '',
          updateTime: serverTimestamp(),
        })
      }
    }
  })
}
