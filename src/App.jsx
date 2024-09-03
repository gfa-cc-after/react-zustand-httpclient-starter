import './App.css'
import { Register } from './pages/Register'
import { Login } from './pages/Login'
import { useAuth } from './store'

function App() {
  const { user } = useAuth()
  return (
    <>
      {user && <h1>Welcome {user.displayName}</h1>}
      <Register />
      <Login />
    </>
  )
}

export default App
