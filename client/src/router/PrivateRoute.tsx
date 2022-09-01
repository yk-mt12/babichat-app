import { Navigate, useNavigate } from 'react-router-dom'
import { useAuth } from '../firebase/authFunction'

export { PrivateRoute }

function PrivateRoute({ children }) {
  const authUser = useAuth()
  const history = useNavigate()

  if (!authUser) {
    // not logged in so redirect to login page with the return url
    return <Navigate to='/login' />
  }

  // authorized so return child components
  return children
}
