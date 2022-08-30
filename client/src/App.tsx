import { memo, useEffect } from 'react'
import { BrowserRouter, useLocation } from 'react-router-dom'
import './App.css'
import Router from './router/router'
import { createUsersDB, useAuth } from './firebase/authFunction'
import Sidebar from './components/ui/sidebar/Sidebar'
import SignOut from './components/model/user/SignOut'
import { Grid } from '@mui/material'

const App = memo(() => {
  const signInUser = useAuth()
  const location = useLocation()
  const path = location.pathname
  const pathList = ['/signup', '/login']
  useEffect(() => {
    createUsersDB()
  }, [])

  return (
    <div className='app'>
      <Grid container justifyContent='space-between' alignItems='flex-start'>
        <Grid item xs={2}>
          {signInUser && !pathList.includes(path) && <Sidebar />}
        </Grid>
        <Grid item xs={9.5}>
          <Router />
        </Grid>
      </Grid>
    </div>
  )
})

export default App
