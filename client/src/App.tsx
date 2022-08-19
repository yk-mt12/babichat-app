import { memo, useEffect, useState } from 'react'
import { BrowserRouter as Router, Navigate } from 'react-router-dom'
import './App.css'
import Home from './components/pages/Home'
import SignIn from './components/signUp/SignIn'
import SignUp from './components/signUp/SignUp'

import { createUsersDB } from './firebase/authFunction'

const App = memo(() => {
  useEffect(() => {
    createUsersDB()
  },[])
  return (
    <Router>
      <div className='app'>
        <Home />
      </div>
    </Router>
  )
})

export default App


