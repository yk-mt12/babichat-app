import { Navigate } from 'react-router-dom'
import { useAuth } from '../firebase/authFunction'

export { PrivateRoute }

function PrivateRoute({ children }: any) {
  const signInUser = useAuth()

  if (!signInUser.uid) {
    // not logged in so redirect to login page with the return url
    return <Navigate to='/login' />
  }

  // authorized so return child components
  return children
}
