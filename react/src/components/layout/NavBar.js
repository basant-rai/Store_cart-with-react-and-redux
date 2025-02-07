import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { getUserDetails, isAuthenticated, signOut } from '../../Api/userApi'
import "./nav.css"

const Nav = () => {
  let data = isAuthenticated();
  let user = data.user
  let navigate = useNavigate()

  const [useDetail, setUserDetail] = useState()

  const signOutClick = (e) => {
    e.preventDefault()
    signOut()
    navigate('/')
  }

  useEffect(() => {
    if (data) {
      getUserDetails()
        .then((res) => setUserDetail(res))
        .catch((err) => console.log(err))
    }
  }, [])

  return (
    <div className='sticky-top bg-white'>
      <div className='w-75 mx-auto  py-1'>
        <div className='d-flex align-items-center justify-content-between' style={{ borderBottom: "0.5px solid white", textAlign: 'center' }}>
          <div className='' >
            <Link className=" Brand navbar-brand fs-2" to="/" style={{ color: "beige" }}>
              <img alt="logo" src="/images/logo.jpeg" className='h-5 w-5' style={{ height: "50px" }} />
            </Link>
          </div>
          <div className="d-flex">
            <ul className="nav me-auto mb-2 mb-lg-0  mx-auto d-flex align-items-center" >
              <li className="nav-item">
                <Link className="nav-link text-dark " aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-dark" to="/menus">Menu</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-dark" to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <div className='d-flex gap-2 align-items-center'>

            {
              !user &&
              <>
                <Link to="/register" className='btn btn-outline-dark me-2'>
                  Register
                </Link>

                <Link to="/signin" className='btn btn-dark'>
                  Login
                </Link>
              </>
            }
            {
              user && user.role === 0 &&
              <>
                <Link to="/cart">
                  <i className="bi bi-minecart-loaded fs-3 text-dark"></i>
                </Link>
                <span className='ms-4 text-dark'>
                  {useDetail?.user_name || "Username"}
                </span>
              </>
            }
            {
              user && user.role === 1 &&
              <>
                <Link to="/admin/dashboard" className='btn btn-dark'>Dashboard</Link>
              </>
            }
            {
              user &&
              <>
                <Link to='#' onClick={signOutClick} className='bi bi-power fs-3 text-dark'></Link>
              </>
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Nav