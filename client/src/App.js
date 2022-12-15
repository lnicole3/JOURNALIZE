import './App.css'
import { Routes, Route } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Home from './pages/Home'
import Register from './pages/Register'
import Login from './pages/Login'
import Journals from './pages/Journals'
import NewJournal from './components/NewJournal'
import { Link } from 'react-router-dom'
import { CheckSession } from './services/Auth'
import Journal from './components/Journal'
import Page from './components/Page'
import NewPage from './components/NewPage'

function App() {
  const [authenticated, toggleAuthenticated] = useState(false)
  const [user, setUser] = useState(null)

  const handleLogOut = () => {
    //Reset all auth related state and clear localStorage
    setUser(null)
    toggleAuthenticated(false)
    localStorage.clear()
  }
  const checkToken = async () => {
    const user = await CheckSession()
    setUser(user)
    toggleAuthenticated(true)
  }

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      checkToken()
    }
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src="/images/journalize_logo.png" />
        <div className="nav-links">
          <ul>
            <Link to="/register">Register</Link>
            <Link to="/login">Login</Link>
            <Link to="/">Home</Link>
          </ul>
        </div>
      </header>
      <main>
        <Routes>
          <Route
            path="/"
            element={<Home user={user} authenticated={authenticated} />}
          />
          <Route path="/register" element={<Register />} />
          <Route
            path="/login"
            element={
              <Login
                setUser={setUser}
                toggleAuthenticated={toggleAuthenticated}
                handleLogOut={handleLogOut}
              />
            }
          />
          <Route path="/journals" element={<Journals user={user} />} />
          <Route path="/createjournal" element={<NewJournal />} />
          <Route path="/journals/:journal_id" element={<Journal />} />
          <Route path="/pages/:page_id" element={<Page />} />
          <Route path="/new-page/:journal_id" element={<NewPage />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
