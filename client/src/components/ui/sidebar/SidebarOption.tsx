import { Grid } from '@mui/material'
import { memo } from 'react'
import { Link } from 'react-router-dom'
import './SidebarOption.css'

type SidebarOptionProps = {
  Icon: any
  text: string
  navigate?: string
}

// eslint-disable-next-line react/display-name
const SidebarOption = memo((props: SidebarOptionProps) => {
  const { Icon, text, navigate } = props
  const navLink = '/' + navigate
  return (
    <div className='sidebar--option'>
      <Link to={navLink}>
        <Grid
          container
          direction='row'
          justifyContent='space-evenly'
          alignItems='center'
          sx={{ m: '0 auto', p: '0 8px' }}
        >
          <Grid
            item
            xs={3}
            sx={{
              color: '#fff',
            }}
          >
            <Icon />
          </Grid>
          <Grid
            item
            xs={9}
            sx={{
              color: '#fff',
            }}
          >
            <h2>{text}</h2>
          </Grid>
        </Grid>
      </Link>
    </div>
  )
})

export default SidebarOption
