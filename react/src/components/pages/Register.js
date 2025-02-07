import React, { useState } from 'react'
import { Link } from "react-router-dom"
import { registerUser } from '../../Api/userApi';
import Nav from '../layout/NavBar';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')


  const register = (e) => {
    e.preventDefault()
    registerUser(username, email, password)
      .then(data => {
        if (data.error) {
          setError(data.error)
          setSuccess('')
        } else {
          setSuccess("New user created")
          setError('');
        }
      })
  }

  const showError = () => {
    if (error) {
      return <div className='alert alert-danger'>{error}</div>
    }
  }

  const showSuccess = () => {
    if (success) {
      return <div className='alert alert-success'>{success}</div>

    }
  }


  return (
    <>
      <main className="form-signin m-auto w-50 shadow-lg mx-auto p-5 mt-4 rounded-4">
        {
          showError()
        }
        {
          showSuccess()
        }
        <form className='mt-2'>
          <h1 className="h3 mb-3 fw-normal ">Please register</h1>

          <div className="form-floating mt-2">
            <input type="text" className="form-control" id="floatingInputName" placeholder="Enter your user name" onChange={e => setUsername(e.target.value)} value={username} />
            <label htmlFor="floatingInputName" >User Name</label>
          </div>
          {/* <div className="form-floating"> 
      <input type="text" className="form-control" id="floatingInputLast" placeholder="Enter your second name"/>
      <label htmlFor="floatingInput">Last Name</label>
    </div>
    <div className="form-floating">
      <input type="date" className="form-control" id="floatingInputDate" placeholder="Date of birth"/>
      <label htmlFor="floatingInput">Date of Birth</label>
    </div>
    <div className="form-floating">
      <input type="number" className="form-control" id="floatingInputNumber" placeholder="Number"/>
      <label htmlFor="floatingInput">Number</label>
    </div> */}

          <div className="form-floating mt-2">
            <input type="email" className="form-control" id="floatingInputEmail" placeholder="name@example.com" onChange={e => setEmail(e.target.value)} value={email} />
            <label htmlFor="floatingInputEmail" >Email</label>
          </div>
          <div className="form-floating mt-2">
            <input type="password" className="form-control" id="floatingPassword" placeholder="Password" onChange={e => setPassword(e.target.value)} value={password} />
            <label htmlFor="floatingPassword" >Password</label>
          </div>

          {/* <div className="form-floating">
      <input type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
      <label htmlFor="floatingPassword">Confirm Password</label>
    </div> */}

          {/* <div className="checkbox mb-3">
      <label>
        <input type="checkbox" value="remember-me"/> I accept all terms and condition
      </label>
    </div> */}

          <button className="w-100 btn btn-lg btn-dark my-2" type="submit" onClick={register}>Register</button>
          Already have an account <Link to="/signin">SignIn</Link>
        </form>
      </main>
    </>
  )
}

export default Register