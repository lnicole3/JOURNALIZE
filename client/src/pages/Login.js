import { useState } from 'react'
import { SignInUser } from '../services/Auth'
import { useNavigate } from 'react-router-dom'

const SignIn = (props) => {
  const [formValues, setFormValues] = useState({ email: '', passwordInput: '' })

  let navigate = useNavigate()

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const payload = await SignInUser({ ...formValues })
    setFormValues({ email: '', passwordInput: '' })
    props.setUser(payload)
    props.toggleAuthenticated(true)
    navigate('/')
  }

  return (
    <div className="signin col">
      <div className="card-overlay centered">
        <form className="col" onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <label htmlFor="email">Email</label>
            <input
              onChange={handleChange}
              name="email"
              type="email"
              placeholder="example@example.com"
              value={formValues.email}
              required
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="passwordInput">Password</label>
            <input
              onChange={handleChange}
              type="password"
              name="passwordInput"
              value={formValues.passwordInput}
              required
            />
          </div>
          <button disabled={!formValues.email || !formValues.passwordInput}>
            Sign In
          </button>
        </form>
      </div>
    </div>
  )
}

export default SignIn
