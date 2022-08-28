import { Grid } from '@mui/material'
import { Link } from 'react-router-dom'
import './GridItem.css'

type Props = {
  child: JSX.Element
  colRatio: any
  navigate?: string
}
const GridItem = (props: Props) => {
  const { child, colRatio, navigate } = props
  const navLink = navigate ? '/' + navigate : ''

  return (
    <Grid
      item
      xs={colRatio}
      className='container-box'
      sx={{
        mb: 1,
        mt: 2,
      }}
    >
      <Link to={navLink}>{child}</Link>
    </Grid>
  )
}

export default GridItem
