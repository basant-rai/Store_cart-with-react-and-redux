import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { isAuthenticated } from '../Api/userApi'

const PrivateRoute = () => {
  return (
   <>
   {
    isAuthenticated() && isAuthenticated().user.role ===0 ?
    <Outlet/>
    : <Navigate to='/signin'/>
   }
   </>

  )
}

export default PrivateRoute