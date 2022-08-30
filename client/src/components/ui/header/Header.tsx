import { useLocation } from 'react-router-dom'
import './Header.css'

type Props = {
  title: string
}

const Header = (props: Props) => {
  const { title } = props
  const location = useLocation()

  return (
    <div>
      <h2 className={`title ${location.pathname === '/home' && 'when-home'}`}>{title}</h2>
    </div>
  )
}

export default Header
