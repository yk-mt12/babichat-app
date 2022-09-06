import { Grid } from '@mui/material'
import { useLocation } from 'react-router-dom'
import SignOut from '../../model/user/SignOut'
import './Header.css'

type Props = {
  title: string
}

const Header = (props: Props) => {
  const { title } = props
  const location = useLocation()

  return (
    <div>
      <link href='https://fonts.googleapis.com/earlyaccess/nicomoji.css' rel='stylesheet' />
      <Grid container justifyContent='space-between' alignItems='center'>
        <Grid item>
          <h2 className={`title ${location.pathname === '/home' && 'when-home'}`}>{title}</h2>
        </Grid>
        <Grid item>
          {((location.pathname === '/home' && title === 'ちゃばっとぼ') ||
            location.pathname !== '/home') && <SignOut />}
        </Grid>
      </Grid>
    </div>
  )
}

export default Header
