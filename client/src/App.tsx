import { memo, useEffect } from 'react'
import { BrowserRouter } from 'react-router-dom'
import './App.css'
import Router from './router/router'
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
