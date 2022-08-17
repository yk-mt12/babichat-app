import React, { useEffect, useState } from 'react'
import { auth, provider } from '../../firebase'
// import firebaseui from 'firebaseui'
// import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
import 'firebaseui/dist/firebaseui.css'
import { signInWithPopup } from 'firebase/auth'
import { signIn, signUp } from '../../firebase/authFunction'
import { Navigate } from 'react-router-dom'

// TODO:メールログイン（サインアップ）の場合、うまくいかない
const SignUp = () => {
  // const signInWithGoogle = () => {
  //   signInWithPopup(auth, provider)
  // }
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  // const [username, setUsername] = useState<string>('')

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()

    signUp(email, password)
  }

  return (
    <div>
      <h1>アカウントを作成</h1>
      <form onSubmit={handleSubmit}>
        {/* <div>
          <label>ユーザ名</label>
          <input
            name='username'
            type='text'
            placeholder='username'
            onChange={(e) => setUsername(e.target.value)}
          />
        </div> */}
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
        {/* <Navigate to='/signup'>
          <div>ユーザ登録はから</div>
        </Navigate> */}
      </form>
    </div>
  )
}
export default SignUp
