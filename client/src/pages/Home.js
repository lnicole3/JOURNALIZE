import React from 'react'
import { useNavigate, Link } from 'react-router-dom'
import axios from 'axios'

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
      <div>
        <Link to="/journals">
          <h1>My Journals</h1>
        </Link>
        <div className="resources">
          <h1>Resources</h1>
          <Link to="https://www.grammarly.com/blog/10-ways-keeping-a-journal-will-genuinely-improve-your-life/?gclid=CjwKCAiAheacBhB8EiwAItVO2yZF_muWEvPe54bK5cy0jOwlp91wO1yHUMYtBYKk1taZ0fheao-6KBoC59QQAvD_BwE&gclsrc=aw.ds">
            10 Ways Keeping a Journal Will Genuinely Improve Your Life
          </Link>
          <Link to="https://liveboldandbloom.com/11/writing/journaling-ideas">
            61 Of The Best Journaling Ideas To De-Stress And Feel Happy
          </Link>
        </div>
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
