import { memo, useEffect, useState } from 'react'
import { BrowserRouter, Navigate, useLocation } from 'react-router-dom'
import './App.css'
import Router from './router/router'
import { createUsersDB, useAuth } from './firebase/authFunction'
import Sidebar from './components/ui/sidebar/Sidebar'
import SignOut from './components/model/user/SignOut'
import { Grid } from '@mui/material'
import Loading from './components/ui/loading/Loading'
// import BackgroundAnimation from './components/ui/animation/BackgroundAnimation'
import ParticlesBg from 'particles-bg'

const App = memo(() => {
  const signInUser = useAuth()
  const location = useLocation()
  const path = location.pathname
  const pathList = ['/signup', '/login']
  const [isLoading, setIsLoading] = useState<Boolean>(false)

  useEffect(() => {
    setIsLoading(true)
    signInUser.uid && createUsersDB()
    setIsLoading(false)
  }, [signInUser.uid])

  return (
    <div className='app'>
      {isLoading ? (
        <Loading text='読み込み中' />
      ) : (
        <>
          <Grid container justifyContent='space-between' alignItems='flex-start'>
            <Grid item xs={2}>
              {signInUser.uid && !pathList.includes(path) && <Sidebar />}
            </Grid>
            <Grid item xs={9.5}>
              <Router />
            </Grid>
          </Grid>
        </>
      )}
      <ParticlesBg type='random' bg={true} />
    </div>
  )
})

export default App
