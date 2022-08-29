import { memo, useEffect } from 'react'
import { BrowserRouter } from 'react-router-dom'
import './App.css'
import Router from './router/router'
import { createUsersDB, useAuth } from './firebase/authFunction'
import Sidebar from './components/ui/sidebar/Sidebar'
import SignOut from './components/model/user/SignOut'
import { Grid } from '@mui/material'

const App = memo(() => {
  const signInUser = useAuth()
  useEffect(() => {
    createUsersDB()
  }, [])

  return (
    <BrowserRouter>
      <div className='app'>
        <Grid container  justifyContent='space-between' alignItems='flex-start'>
          <Grid item xs={2}>
            {signInUser && <Sidebar />}
          </Grid>
          <Grid item xs={9.5}>
            <Router />
          </Grid>
        </Grid>
      </div>
    </BrowserRouter>
  )
})

export default App
