import { CardCvcElement, CardExpiryElement, CardNumberElement, useElements, useStripe } from '@stripe/react-stripe-js'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { toast, ToastContainer } from 'react-toastify'
import { isAuthenticated } from '../../Api/userApi'
import { API, IMAGE } from '../../config'
import Nav from '../layout/NavBar'
import CheckoutProgress from '../CheckoutProgress'
import Footer from '../layout/Footer'


const Payment = () => {
  const cart_items = useSelector(state => state.cart.cart_items)
  const shipping_info = useSelector(state => state.cart.shipping_info)
  const { user, token } = isAuthenticated()

  const stripe = useStripe()
  const elements = useElements()

  const options = {
    style: {
      base: {
        fontSize: '16px'
      },
      invalid: {
        color: '#ff0000'
      }
    }
  }

  let order_info = {
    order_items: cart_items,
    user: user,
    total_price: sessionStorage.getItem('order_total'),
    shipping_address: shipping_info.shipping_address,
    alternate_shipping_address: shipping_info.alternate_shipping_address,
    city: shipping_info.city,

    country: shipping_info.country,
    zip: shipping_info.zip,
    phone: shipping_info.phone
  }

  const makePayment = async (e) => {
    e.preventDefault()
    document.getElementById('payBtn').disabled = true
    let amount = sessionStorage.getItem('order_total') * 100

    let res
    try {
      res = await fetch(`${API}/processpayment`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ amount })
      },
      )
        .then(response => response.json())
        .catch(error => toast.error(error))

      const result = res.client_secret

      if (!stripe || !elements) {
        return
      }


    }
    catch {

    }
  }


  return (
    <>

      <Nav/>
      <ToastContainer theme='colored' position='top-right' />
      <CheckoutProgress shipping payment />
      <div className='row p-5 m-5 shadow'>
        <div className='cartItems border-end border-3' style={{ width: "60%" }}>
          <div className='row row-cols-md-4 g-4'>
            {
              cart_items.map((item, i) => {
                return <div className="col mb-3">
                  <div className="card">
                    <img src={`${IMAGE}/${item.image}`} className="card-img-top" alt={item.image} style={{ height: "200px", width: "200px" }} />
                    <div className="card-body text-center">
                      <h5 className="card-title">{item.name}</h5>
                      <h5 className="card-title">Quantity:{item.quantity}</h5>
                      <h5 className="card-title">Total: Rs.{item.quantity * item.price}</h5>
                    </div>
                  </div>
                </div>
              })
            }
          </div>
          <h2>Order Total: Rs. {JSON.parse(sessionStorage.getItem('order_total'))}</h2>
          <hr className='my-3' />
          <div className='shippingInfo p-5' style={{ width: "40%" }}>
            <h3 className='text-center text-decoration-underline'>Shipping Address</h3>
            <label htmlFor='street'>Street Address:{shipping_info.shipping_address}</label><br />
            <label htmlFor='street2'>Alternate Street Address:{shipping_info.alternate_shipping_address}</label><br />
            <label htmlFor='city'>City: {shipping_info.city}</label><br />
            <label htmlFor='zip'>Zip Code: {shipping_info.zip}</label><br />
            <label htmlFor='country'>Country: {shipping_info.country}</label>
            <label htmlFor='phone'>Phone: {shipping_info.phone}</label>

          </div>
        </div>
        <div className='p-5 shadow-lg' style={{ width: '40%' }}>
          <h3>Card Information</h3>
          <hr className='my-3' />
          <label htmlFor='card-number'>Card Number</label>
          <CardNumberElement className='form-control' id='card-number' options={options} />
          <label htmlFor='card-expirty'>Expires On</label>
          <CardExpiryElement id='card-expiry' className='form-control w-25' options={options} />
          <label htmlFor='card-cvc'>CVC</label>
          <CardCvcElement className='form-control w-25' id='card-cvc' options={options} />
          <hr className='my-3' />
          <button className='btn btn-warning form-control' onClick={makePayment} id='payBtn'>Make Payment</button>

        </div>
      </div>
      <Footer />
    </>
  )
}

export default Payment

// const Payment = () => {
//   const cart_items = useSelector(state => state.cart.cart_items)
//   const shipping_info = useSelector(state => state.cart.shipping_info)
//   console.log(shipping_info)

//   const { user } = isAuthenticated();

//   const stripe = useStripe()
//   const elements = useElements()


//   let order_info = {
//     order_items: cart_items,
//     user: user,
//     total_price: sessionStorage.getItem('order_total'),
//     shipping_address: shipping_info.shipping_address,
//     alternate_shipping_address: shipping_info.alternate_shipping_address,
//     city: shipping_info.city,
//     country: shipping_info.country,
//     zip: shipping_info.zip,
//     phone: shipping_info.phone
//   }



//   return (
//     <>

//       <Nav />
//       <ToastContainer theme='colored' position='top-right' />
//       <CheckoutProgress shipping payment />
//       <div className='row p-5 m-5 shadow'>
//         <div className='cartItems border-end border-3' style={{ width: "60%" }}>
//           <div className='row row-cols-md-4 g-4'>
//             {
//               cart_items.map((item, i) => {
//                 return <div className="col mb-3">
//                   <div className="card">
//                     <img src={`${IMAGE}/${item.image}`} className="card-img-top" alt={item.image} style={{ height: "200px", width: "200px" }} />
//                     <div className="card-body text-center">
//                       <h5 className="card-title">{item.name}</h5>
//                       <h5 className="card-title">Quantity:{item.quantity}</h5>
//                       <h5 className="card-title">Total: Rs.{item.quantity * item.price}</h5>
//                     </div>
//                   </div>
//                 </div>
//               })
//             }
//           </div>
//           <h2>Order Total: Rs. {JSON.parse(sessionStorage.getItem('order_total'))}</h2>

//           <div className='shippingInfo p-5' style={{ width: "40%" }}>
//             <h3 className='text-center text-decoration-underline'>Shipping Address</h3>
//             <label htmlFor='street'>Street Address:{shipping_info.shipping_address}</label><br />
//             <label htmlFor='street2'>Alternate Street Address:{shipping_info.alternate_shipping_address}</label><br />
//             <label htmlFor='city'>City: {shipping_info.city}</label><br />
//             <label htmlFor='zip'>Zip Code: {shipping_info.zip}</label><br />
//             <label htmlFor='country'>Country: {shipping_info.country}</label>
//             <label htmlFor='phone'>Phone: {shipping_info.phone}</label>

//           </div>
//         </div>
//         <div>
//           <h3>Card information</h3>
//           <hr />
//           <label htmlFor='card-number'>Card Number</label>
//           <CardNumberElement className='form-control' id='card-number' />

//           <label htmlFor='card-expiry'>Expires on</label>
//           <CardExpiryElement className='w-25 form-control' id='card-expiry' />

//           <label htmlFor='card-cvc'>cvc</label>
//           <CardCvcElement className='form-control w-25' id='card-cvc' />
//         </div>
//       </div>
//       <Footer />
//     </>
//   )
// }

// export default Payment