import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom"
import { authenticate, isAuthenticated, signIn } from '../../Api/userApi';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')
  const navigate = useNavigate();
  const { user } = isAuthenticated();

  const signInClick = (e) => {
    setSuccess(false)
    setError('')
    e.preventDefault()

    signIn(email, password)
      .then(data => {
        if (data.error) {
          setError(data.error)
        } else {
          setSuccess(true)
          authenticate(data)
        }
      })
      .catch(err => console.log(err))
  }

  const showError = () => {
    if (error) {
      return <div className='alert alert-danger'>{error}</div>
    }
  }
  const redirect = () => {
    if (success) {
      if (user && user.role === 1) {
        return navigate('/admin/dashboard')
      } else {
        return navigate('/')

      }
    }
  }

  return (
    <>
      <main className="form-signin m-auto w-50 shadow-lg mx-auto p-5 mt-5 rounded-4">

        <form>
          {showError()}
          {redirect()}
          <h1 className="h3 mb-3 fw-bold ">Please sign in</h1>

          <div className="form-floating mb-2">
            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" onChange={e => setEmail(e.target.value)} />
            <label htmlFor="floatingInput">Email address</label>
          </div>
          <div className="form-floating mb-2">
            <input type="password" className="form-control" id="floatingPassword" placeholder="Password" onChange={e => setPassword(e.target.value)} />
            <label htmlFor="floatingPassword">Password</label>
          </div>

          <div className="checkbox mb-3">
            <label>
              <input type="checkbox" value="remember-me" /> Remember me
            </label>
          </div>
          <button className="w-100 btn btn-lg btn-dark" type="submit" onClick={signInClick}>SignIn</button>
          <div className='d-flex justify-content-between mt-2'>
            <Link to='/forgetpassword' >Forget password</Link>
            <Link to='/resendverification'>Resend verification</Link>
          </div>
          Don't have an account <Link to="/register">Register</Link>
        </form>
      </main>
    </>
  )
}

export default SignIn