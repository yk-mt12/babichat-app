import { useLocation } from 'react-router-dom'
import SignOut from '../../model/user/SignOut'
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
      {((location.pathname === '/home' && title === 'チャバットボ') ||
        location.pathname !== '/home') && <SignOut />}
    </div>
  )
}

export default Header
