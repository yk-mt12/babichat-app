import React from 'react'
import { logout } from '../../firebase/authFunction'
import { useNavigate, Navigate } from 'react-router-dom'

const SignOut = () => {
  const navigate = useNavigate()
  const handleLogout = () => {
    logout()
    navigate('/login')
  }
  return (
    <div>
      <button onClick={handleLogout}>ログアウト</button>
    </div>
  )
}

export default SignOut
