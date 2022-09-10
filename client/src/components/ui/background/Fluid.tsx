import React from 'react'
import BackgroundFluid from './BackgroundFluid'
import './Fluid.css'

function Fluid() {
  return (
    <div className='fluid'>
      <BackgroundFluid top={2} rigth={2} deg={10} backgroundColor={'#fff100'} />
      <BackgroundFluid top={40} rigth={60} deg={30} backgroundColor={'#fbad03'} />
      <BackgroundFluid top={5} rigth={100} deg={90} backgroundColor={'#a3e417'} />
      <BackgroundFluid top={60} rigth={120} deg={45} backgroundColor={'#ee6eee'} />
    </div>
  )
}

export default Fluid
