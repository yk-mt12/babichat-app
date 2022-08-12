import React from 'react'

type SidebarOptionProps = {
  Icon: any
  text: String
}
const SidebarOption = (props: SidebarOptionProps) => {
  const { Icon, text } = props
  return (
    <div>
      <Icon />
      <h2>{text}</h2>
    </div>
  )
}

export default SidebarOption
