import { BrowserRouter as Router } from 'react-router-dom'
import './App.css'
import Home from './components/pages/Home'
import SignIn from './components/signUp/Signin'

import { useAuth } from './firebase/authFunction'

function App() {
  const signInUser = useAuth()

  return (
    <Router>
      <div className='app'>{signInUser.uid ? <Home /> : <SignIn />}</div>
    </Router>
  )
}

export default App
