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
        <Grid container>
          <Grid item xs={3}>{signInUser && <Sidebar />}</Grid>
          <Grid item xs={9}>
            <Router />
          </Grid>
        </Grid>
      </div>
    </BrowserRouter>
  )
})

export default App
