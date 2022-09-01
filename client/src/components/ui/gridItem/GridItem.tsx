import { Grid } from '@mui/material'
import { Link } from 'react-router-dom'
import './GridItem.css'

type Props = {
  child?: JSX.Element
  colRatio: any
  navigate?: string
  width?: string | Number // gridカードの横幅
  height?: string | Number // gridカードの縦
  label?: string
  cName?: string
  isScroll?: boolean
}
const GridItem = (props: Props) => {
  const { child, colRatio, navigate, width, height, label, cName, isScroll } = props
  const navLink = navigate ? '/' + navigate : ''

  return (
    <Grid
      item
      xs={colRatio}
      className={`container-box ${cName} ${isScroll ? 'scroll-box' : ''}`}
      sx={{
        mb: 1,
      }}
      style={{ width: `${width}`, height: `${height}` }}
    >
      {navLink && <Link to={navLink}>{child}</Link>}
      {label && (
        <p
          style={{
            margin: 0,
            textAlign: 'center',
          }}
          className={`${cName}`}
        >
          {label}
        </p>
      )}
    </Grid>
  )
}

export default GridItem
