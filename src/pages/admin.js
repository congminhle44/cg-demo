import { useRef } from 'react'
import { config } from '../config'
import { useNavigate } from 'react-router-dom'
const Admin = () => {
  const usernameRef = useRef()
  const passwordRef = useRef()
  const navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault()
    if (
      usernameRef.current.value === config.adminUserName &&
      passwordRef.current.value === config.adminPassword
    ) {
      navigate('/dashboard', { state: { password: config.adminPassword } })
    } else {
      alert('Wrong username or password!')
    }
  }

  return (
    <div className="form-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="username">
          <label htmlFor="username">
            <b>Username</b>
          </label>
          <div className="input-wrap">
            <input
              type="text"
              placeholder="Enter Username"
              name="username"
              ref={usernameRef}
              required
            />
          </div>
        </div>

        <div className="password">
          <label htmlFor="password">
            <b>Password</b>
          </label>
          <div className="input-wrap">
            <input
              type="password"
              placeholder="Enter Password"
              name="password"
              ref={passwordRef}
              required
            />
          </div>
        </div>

        <button className="submit-btn" type="submit">
          Login
        </button>
      </form>
    </div>
  )
}

export default Admin
