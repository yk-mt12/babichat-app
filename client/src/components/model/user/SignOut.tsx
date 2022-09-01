import { logout } from '../../../firebase/authFunction'
import { useNavigate } from 'react-router-dom'
import { Button } from '@mui/material'

const SignOut = () => {
  const navigate = useNavigate()
  const handleLogout = () => {
    logout()
    navigate('/login')
  }
  return (
    <div>
      <Button variant='contained' onClick={handleLogout}>ログアウト</Button>
    </div>
  )
}

export default SignOut
