import { logout } from '../../../firebase/authFunction'
import { useNavigate } from 'react-router-dom'
import { Button } from '@mui/material'
import { useState } from 'react'
import Loading from '../../ui/loading/Loading'

const SignOut = () => {
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState<Boolean>(false)

  const handleLogout = async () => {
    await logout()
    navigate('/login')
  }

  return (
    <>
      <div>
        <Button variant='contained' onClick={handleLogout}>
          ログアウト
        </Button>
      </div>
    </>
  )
}

export default SignOut
