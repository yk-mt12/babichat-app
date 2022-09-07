import React from 'react'
import BackgroundFluid from './BackgroundFluid'
import './Fluid.css'

function Fluid() {
  return (
    <div className='fluid'>
      <BackgroundFluid top={2} rigth={2} deg={10} backgroundColor={'#fff199'} />
      <BackgroundFluid top={40} rigth={60} deg={30} backgroundColor={'#fbad99'} />
      <BackgroundFluid top={5} rigth={100} deg={90} backgroundColor={'#a3e499'} />
      <BackgroundFluid top={60} rigth={120} deg={45} backgroundColor={'#dda0dd'} />
      <BackgroundFluid top={70} rigth={3} deg={25} backgroundColor={'#b0c4de'} />
      <BackgroundFluid top={80} rigth={85} deg={5} backgroundColor={'#fa89aa'} />
    </div>
  )
}

export default Fluid
