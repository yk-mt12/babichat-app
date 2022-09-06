import './BackgroundFluid.css'

type fluidOption = {
  top: number
  rigth: number
  deg: number
  backgroundColor: any
}

const BackgroundFluid = (props: fluidOption) => {
  const { top, rigth, deg, backgroundColor } = props
  return (
    <div
      className='fluid'
      style={{
        position: 'absolute',
        top: `${top}vh`,
        right: `${rigth}vh`,
        rotate: `${deg}deg`,
        background: backgroundColor,
      }}
    ></div>
  )
}

export default BackgroundFluid
