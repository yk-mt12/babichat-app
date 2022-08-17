import React, { useEffect, useState } from 'react'
import { auth, provider } from '../../firebase'
// import firebaseui from 'firebaseui'
// import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
import 'firebaseui/dist/firebaseui.css'
import { signInWithPopup } from 'firebase/auth'
import { signIn, useAuth } from '../../firebase/authFunction'
import { Navigate } from 'react-router-dom'

const SignIn = () => {
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
  }
  const signInUser = useAuth()
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(email, password)

    signIn(email, password)
  }

  return (
    <div>
      <h1>ログイン</h1>
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
        <div>
          ユーザ登録はこちらから
          {/* <Navigate to='/signup' /> */}
        </div>
      </form>
      <div>
        <button onClick={signInWithGoogle}>Googleでログイン</button>
      </div>
    </div>
  )
}
export default SignIn
