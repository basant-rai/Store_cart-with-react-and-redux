import React from 'react'
import { Link } from 'react-router-dom'

const CheckoutProgress = ({ confirmorder, shipping, payment }) => {
  return (
    <>
      <div className='d-flex justify-content-center gap-4 pt-4'>
        <Link to='/confirmorder' className='btn btn-warning'>Checkout</Link>
        {
          shipping ?
            <Link to='/shipping' className='btn btn-warning '>Shipping & Payment</Link>
            :
            <button className='btn btn-warning' disabled>Shipping & Payment</button>
        }

      </div>
    </>
  )
}

export default CheckoutProgress