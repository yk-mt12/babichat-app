import { Grid } from '@mui/material'
import './GridItem.css'

type Props = {
  colRatio: any
  width?: string | number // gridカードの横幅
  height?: string | number // gridカードの縦
  label?: string
}
const IsLoginGrid = (props: Props) => {
  const { colRatio, width, height, label } = props

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
      {label && <p className='block-label'>{label}</p>}
    </Grid>
  )
}

export default IsLoginGrid
