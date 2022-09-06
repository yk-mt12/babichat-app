import { Grid } from '@mui/material'
import { Link } from 'react-router-dom'
import './SidebarOption.css'

type SidebarOptionProps = {
  Icon: any
  text: string
  navigate?: string
}

const SidebarOption = (props: SidebarOptionProps) => {
  const { Icon, text, navigate } = props
  const navLink = '/' + navigate
  return (
    <div className='sidebar--option'>
      <link
        href='https://fonts.googleapis.com/css2?family=Hachi+Maru+Pop&family=Mochiy+Pop+P+One&display=swap'
        rel='stylesheet'
      />
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
            <h2
              style={{
                fontWeight: 400,
                fontSize: 22,
              }}
            >
              {text}
            </h2>
          </Grid>
        </Grid>
      </Link>
    </div>
  )
}

export default SidebarOption
