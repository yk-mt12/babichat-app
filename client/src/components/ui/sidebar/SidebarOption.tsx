import { Grid } from '@mui/material'
import { Link } from 'react-router-dom'

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
      <Link to={navLink}>
        <Grid
          container
          direction='row'
          justifyContent='space-evenly'
          alignItems='baseline'
          sx={{ m: '0 auto', p: '0 8px' }}
        >
          <Grid
            item
            xs={2}
            sx={{
              color: '#fff',
            }}
          >
            <Icon />
          </Grid>
          <Grid
            item
            xs={10}
            sx={{
              color: '#fff',
            }}
          >
            <h2
              style={{
                fontWeight: 400,
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
