import React from 'react'
import { Link } from 'react-router-dom'
// import { Navigate } from 'react-router-dom'

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
        <Icon />
        <h2>{text}</h2>
      </Link>
    </div>
  )
}

export default SidebarOption
