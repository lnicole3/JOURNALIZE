import logo from './logo.svg'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import Home from './pages/Home'
import Register from './pages/Register'
import Login from './pages/Login'
import Journals from './pages/Journals'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { BASE_URL } from './services/api.js'
function App() {
  const [authenticated, toggleAuthenticated] = useState(false)
  const [user, setUser] = useState(null)

  return (
    <div className="App">
      <header className="App-header">
        <Link to="/">Home</Link>
        <Link to="/register">Register</Link>
        <Link to="/login">Login</Link>
      </header>
      <main>
        <Routes>
          <Route
            path="/home"
            element={<Home user={user} authenticated={authenticated} />}
          />
          <Route path="/register" element={<Register />} />
          <Route
            path="/login"
            element={
              <Login
                setUser={setUser}
                toggleAuthenticated={toggleAuthenticated}
              />
            }
          />
          <Route path="/journals" element={<Journals />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
