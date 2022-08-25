import { memo, useEffect, useState } from 'react'
import { BrowserRouter, Navigate } from 'react-router-dom'
import './App.css'
import Router from './router/router'
import SignIn from './components/model/user/SignIn'
import SignUp from './components/model/user/SignUp'

import { createUsersDB, useAuth } from './firebase/authFunction'
import Sidebar from './components/ui/sidebar/Sidebar'
import SignOut from './components/model/user/SignOut'

const App = memo(() => {
  const signInUser = useAuth()
  useEffect(() => {
    createUsersDB()
  }, [])

  return (
    <BrowserRouter>
      <div className='app'>
        {signInUser && <Sidebar />}
        <Router />
        {signInUser && <SignOut />}
      </div>
    </BrowserRouter>
  )
})

export default App
