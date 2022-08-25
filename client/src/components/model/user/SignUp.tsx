import React, { useEffect, useState } from 'react'
import { auth, provider } from '../../../firebase'
// import firebaseui from 'firebaseui'
// import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
import 'firebaseui/dist/firebaseui.css'
import { signInWithPopup } from 'firebase/auth'
import { signIn, signUp, useAuth } from '../../../firebase/authFunction'
import { Navigate } from 'react-router-dom'

// TODO:メールログイン（サインアップ）の場合、うまくいかない
const SignUp = () => {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const signInUser = useAuth()

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()
    signUp(email, password)
  }

  return (
    <>
      {signInUser.uid ? (
        <Navigate to='/' />
      ) : (
        <div>
          <h1>アカウントを作成</h1>
          <form onSubmit={handleSubmit}>
            <div>
              <label>メールアドレス</label>
              <input
                name='email'
                type='email'
                placeholder='email'
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label>パスワード</label>
              <input
                name='password'
                type='password'
                placeholder='password'
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div>
              <button>ログイン</button>
            </div>
          </form>
        </div>
      )}
    </>
  )
}
export default SignUp
