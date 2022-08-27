import { Grid } from '@mui/material'
import './GridItem.css'

type Props = {
  child: JSX.Element
  colRatio: Number
}
const GridItem = (props: Props) => {
  const { child, colRatio } = props
  return (
    <Grid
      item
      xs={colRatio}
      className='container-box'
      sx={{
        mr: 2,
        mt: 1,
      }}
    >
      {child}
    </Grid>
  )
}

export default GridItem
