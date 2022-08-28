import { Grid } from '@mui/material'
import { Link } from 'react-router-dom'
import './GridItem.css'

type Props = {
  child: JSX.Element
  colRatio: any
  navigate?: string
  width: Number // gridカードの横幅
  height: string // gridカードの縦
}
const GridItem = (props: Props) => {
  const { child, colRatio, navigate, width, height } = props
  const navLink = navigate ? '/' + navigate : ''

  return (
    <Grid
      item
      xs={colRatio}
      className='container-box'
      sx={{
        mb: 1,
      }}
      style={{ width: `${width}`, height: `${height}` }}
    >
      <Link to={navLink}>{child}</Link>
    </Grid>
  )
}

export default GridItem
