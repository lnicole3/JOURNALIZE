import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = ({ user, authenticated }) => {
  let navigate = useNavigate()

  return user && authenticated ? (
    <div>Home</div>
  ) : (
    <div className="protected">
      <h3>Oops! You must be signed in to do that!</h3>
      <button onClick={() => navigate('/signin')}>Sign In</button>
    </div>
  )
}

export default Home
