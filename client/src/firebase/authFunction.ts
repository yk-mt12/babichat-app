import { useEffect } from 'react'
import { useRecoilState, useResetRecoilState } from 'recoil'
import { signInUserState } from '../store/auth'
import { auth } from './index'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
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
        })
      } else {
        resetStatus()
      }
    })
    return () => unSub()
  }, [setSignInUser, resetStatus])

  return signInUser
}
