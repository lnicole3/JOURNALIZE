import React from 'react'
import { useNavigate, Link } from 'react-router-dom'

const Home = ({ user, authenticated, handleLogOut }) => {
  let navigate = useNavigate()
  let authenticatedOptions
  if (user) {
    authenticatedOptions = (
      <nav className="signin-nav">
        <h3>Welcome {user.firstName}!</h3>
        <button onClick={handleLogOut}>Sign Out</button>
      </nav>
    )
  }
  const publicOptions = (
    <nav className="nav">
      <ul>
        {/* <Link to="/">Home</Link> */}
        <Link to="/register" style={{ textDecoration: 'none' }}>
          <li>Register |</li>
        </Link>
        <Link to="/login" style={{ textDecoration: 'none' }}>
          <li>| Sign In</li>
        </Link>
      </ul>
    </nav>
  )
  return user && authenticated ? (
    <div>
      Home
      <div>
        <Link to="/journals">Journals</Link>
      </div>
    </div>
  ) : (
    <div className="protected">
      <h3>Oops! You must be signed in to do that!</h3>
      <button onClick={() => navigate('/login')}>Sign In</button>
      {authenticated && user ? authenticatedOptions : publicOptions}
    </div>
  )
}

export default Home
