import { Grid } from '@mui/material'
import './GridItem.css'

type Props = {
  child: JSX.Element
  colRatio?: Number
  style?: any
}

const GridItem = (props: Props) => {
  const { child, colRatio } = props
  return (
    <Grid
      item
      className='container-box'
      md={colRatio}
      sx={{
        m: '1, 2',
      }}
    >
      {child}
    </Grid>
  )
}

export default GridItem
