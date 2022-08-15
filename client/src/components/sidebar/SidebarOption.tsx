import React from 'react'
// import { Navigate } from 'react-router-dom'

type SidebarOptionProps = {
  Icon: any
  text: String
  navigate: String
}

const SidebarOption = (props: SidebarOptionProps) => {
  const { Icon, text, navigate } = props
  return (
    <div>
      <Icon />
      <h2>{text}</h2>
      {/* <Navigate to='/post' replace={true} /> */}
    </div>
  )
}

export default SidebarOption
