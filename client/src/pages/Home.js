import React from 'react'
import { useNavigate, Link } from 'react-router-dom'

const Home = ({ user, authenticated }) => {
  let navigate = useNavigate()

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
    </div>
  )
}

export default Home
