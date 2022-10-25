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

  const [config, setConfig] = useState<any>({
    num: [4, 7],
    rps: 0.1,
    radius: [5, 40],
    life: [1.5, 3],
    v: [2, 3],
    tha: [-40, 40],
    alpha: [0.6, 0],
    scale: [0.1, 0.4],
    position: 'all',
    color: ['random', '#ff0000'],
    cross: 'dead',
    // emitter: "follow",
    random: 15,
  })

  useEffect(() => {
    if (Math.random() > 0.85) {
      setConfig(
        Object.assign(config, {
          onParticleUpdate: (ctx: any, particle: any) => {
            ctx.beginPath()
            ctx.rect(particle.p.x, particle.p.y, particle.radius * 2, particle.radius * 2)
            ctx.fillStyle = particle.color
            ctx.fill()
            ctx.closePath()
          },
        }),
      )
    }
  }, [config])

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
          {/* <ParticlesBg color="#fffff" type='Polygon' bg={true} /> */}
          {/* <ParticlesBg type='Polygon' bg={true} /> */}
        </>
      )}
      {/* プロパティ候補：ball->Color2, オブジェクト->Polygon */}
    </div>
  )
})

export default App
