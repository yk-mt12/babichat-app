import React, { useState } from 'react'
import 'firebaseui/dist/firebaseui.css'
import { signUp, useAuth } from '../../../firebase/authFunction'
import { Navigate, Link } from 'react-router-dom'
import Loading from '../../ui/loading/Loading'

import './style.css'
import './SignIn.css'

// TODO:メールログイン（サインアップ）の場合、うまくいかない
const SignUp = () => {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [isLoading, setIsLoading] = useState<Boolean>(false)
  const signInUser = useAuth()

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    signUp(email, password)
    setIsLoading(false)
  }

  return (
    <>
      {isLoading ? (
        <Loading text='アカウント作成中' />
      ) : (
        <>
          {signInUser.uid ? (
            <Navigate to='/home' />
          ) : (
            <div className='login-page'>
              <h1>アカウントを作成</h1>
              <form onSubmit={handleSubmit}>
                <div>
                  {/* <label>メールアドレス</label> */}
                  <input
                    name='email'
                    type='email'
                    placeholder='email'
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div>
                  <input
                    name='password'
                    type='password'
                    placeholder='password'
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div>
                  <button>アカウントを作成する</button>
                </div>
              </form>
              <div className='google-login'>
                <p>
                  ログインは
                  <span className='link-text'>
                    <Link to='/login'>こちら</Link>
                  </span>
                </p>
              </div>
            </div>
          )}
        </>
      )}
    </>
  )
}
export default SignUp
