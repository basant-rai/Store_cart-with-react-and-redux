import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { IMAGE } from '../../config'
import { saveShippingInfo } from '../../Redux/Action/cartAction'
import CheckoutProgress from '../CheckoutProgress'
import Nav from '../layout/NavBar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { countries } from 'countries-list'

const Shipping = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const cart_items = useSelector(state => state.cart.cart_items)
    const [shipping_info, setShippingInfo] = useState({
        shipping_address: "",
        alternate_shipping_address: "",
        city: '',
        country: '',
        zip: '',
        phone: ''

    })

    const countries_list = Object.values(countries)
    const handleShippingAddress = name => e => {
        setShippingInfo({ ...shipping_info, [name]: e.target.value })
    }

    const updateShippingInfo = (e) => {
        dispatch(saveShippingInfo(shipping_info))
        toast.success("shipping info updated")
        setTimeout(() => {
            navigate('/payment')
        }, [5000])

    }
    return (
        <>
            <ToastContainer theme='colored' position='top-right' />
            <CheckoutProgress shipping />
            <div className='row'>
                <div className=' cartitems w-75'>
                    <div className=" row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4 mt-5">
                        {
                            cart_items.map((item, i) => {
                                return <div className='col mt-2 col-md-6 ' >
                                    <div className="card shadow-lg  " >
                                        <img style={{ width: "100%", height: "300px" }} src={`${IMAGE}/${item.image}`} className="card-img-top shadow" alt="..." />
                                        <div className='card-title mx-auto mt-2'>
                                            <h4 className="fw-bold " style={{ animationDuration: "" }}>{item.name}</h4>
                                        </div>
                                        <div className="card-body ">
                                            <h5 className='text-center'>Rs.{item.price}</h5>
                                        </div>
                                    </div>
                                </div>
                            })
                        }
                    </div>
                </div>
                <div className='shippinginfo w-25'>
                    <h4 className='underlined my-2'>Shipping address</h4>
                    <label htmlFor='street'>Street address</label>
                    <input type={'text'} className='form-control w-50' id='street' onChange={handleShippingAddress('shipping_address')} />

                    <label htmlFor='altstreet'>Alternate Street address</label>
                    <input type={'text'} className='form-control w-50' id='altstreet' onChange={handleShippingAddress('alternate_shipping_address')} />


                    <label htmlFor='city'>City:</label>
                    <input type={'text'} className='form-control w-50' id='city' onChange={handleShippingAddress('city')} />

                    <label htmlFor='zip'>Zip code:</label>
                    <input type={'text'} className='form-control w-50' id='zip' onChange={handleShippingAddress('zip')} />

                    <label htmlFor='country'>Country</label>
                    <select type={'text'} className='form-control w-50' id='country' onChange={handleShippingAddress('country')}>
                        <option>Nepal</option>
                        {countries_list.map(country => {
                            return <option value={country.name}>{country.name}</option>

                        })}
                    </select>

                    <label htmlFor='phone'>Phone</label>
                    <input type={'number'} className='form-control w-50' id='phone' onChange={handleShippingAddress('phone')} />

                    <Link to='' className='btn btn-warning mt-3 text-center' onClick={updateShippingInfo}>Save shipping info & proceed to payment</Link>

                </div>
            </div>

        </>
    )
}

export default Shipping