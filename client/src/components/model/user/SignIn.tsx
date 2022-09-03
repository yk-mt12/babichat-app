import React, { useState } from 'react'
import { auth, provider } from '../../../firebase'
import 'firebaseui/dist/firebaseui.css'
import { signInWithPopup } from 'firebase/auth'
import { signIn, useAuth } from '../../../firebase/authFunction'
import { Link, Navigate } from 'react-router-dom'
import './style.css'

const SignIn = () => {
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
  }
  const signInUser = useAuth()
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()
    signIn(email, password)
  }

  return (
    <>
      {signInUser.uid ? (
        <Navigate to='/home' />
      ) : (
        <>
          <div className='login-page'>
            <h1>ログイン</h1>
            <form className="login-form"onSubmit={handleSubmit}>
              <div>
                {/* <label>メールアドレス</label> */}
                <input
                  className='signIn-input'
                  name='email'
                  type='email'
                  placeholder='email'
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                {/* <label>パスワード</label> */}
                <input
                  className='signIn-input'
                  name='password'
                  type='password'
                  placeholder='password'
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div>
                <button className='signIn-button'>ログイン</button>
              </div>
            </form>
          </div>
          <div className='google-login'>
            <p onClick={signInWithGoogle}>
              Googleで<span className='link-text'>ログイン</span>
            </p>
          </div>
          <div className='google-login'>
            <p>
              新規作成は
              <span className='link-text'>
                <Link to='/signup'>こちら</Link>
              </span>
            </p>
          </div>
        </>
      )}
    </>
  )
}
export default SignIn
