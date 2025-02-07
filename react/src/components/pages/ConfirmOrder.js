import React, { useState } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Typography } from '@mui/material';
import Nav from '../layout/NavBar';
import { useDispatch, useSelector } from 'react-redux';
import { API, IMAGE } from '../../config';
import CheckoutProgress from '../CheckoutProgress';
import { Link, useNavigate } from 'react-router-dom';
import { clearCart, saveShippingInfo } from '../../Redux/Action/cartAction';
import { toast } from 'react-toastify';
import axios from 'axios';
import { EsewaPayment } from '../../Api/payment';


const ConfirmOrder = () => {
    const [loading, setLoading] = useState(false);

    const cart_items = useSelector(state => state.cart.cart_items)

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const JWT = JSON.parse(localStorage.getItem('jwt'));
    const user_id = JWT.user._id || "1111111";

    const individual_total = cart_items.map(i => i.quantity * i.price)
    const total_price = individual_total.reduce((acc, cur) => acc + cur)

    sessionStorage.setItem('order_total', total_price)

    const [shipping_info, setShippingInfo] = useState({
        shipping_address: "",
        alternate_shipping_address: "",
        city: '',
        country: '',
        zip: '',
        phone: ''

    })

    const handleShippingAddress = name => e => {
        setShippingInfo({ ...shipping_info, [name]: e.target.value })
    }

    const updateShippingInfo = async (e) => {
        setLoading(true)
        try {
            await axios.post(`${API}/postorder`,
                {
                    Order_items: cart_items,
                    user: user_id,
                    total_price: total_price,
                    shipping_address: shipping_info.shipping_address,
                    alternate_shipping_address: shipping_info.alternate_shipping_address,
                    city: shipping_info.city,
                    contact: shipping_info.phone,
                }
            )
            dispatch(clearCart([]))
            dispatch(saveShippingInfo(shipping_info))
            toast.success("shipping info updated")
            setTimeout(() => {
                setLoading(false);
                EsewaPayment(total_price)
            }, [5000])


        } catch (error) {
            setLoading(false);

        }
    }

    return (
        <>
            <CheckoutProgress />
            <div className='row mt-2 m-5 p-5'>
                {
                    cart_items.length > 0 ?
                        <>
                            <div className='d-flex'>
                                <TableContainer className=" mt-3 mx-auto text-center" sx={{ width: "70%", padding: "0px 20px", border: "5px solid grey", borderRadius: "20px" }}>
                                    <h3 className='text-center'>Cart Item</h3>
                                    <Table>
                                        <TableHead className="text-center">
                                            <TableRow >
                                                <TableCell size="small">SN</TableCell>
                                                <TableCell size='small'>Product Image</TableCell>
                                                <TableCell className='text-center'>Product Name</TableCell>
                                                <TableCell className='text-center'>Unit price</TableCell>
                                                <TableCell className='text-center'>Quantity</TableCell>
                                                <TableCell className='text-center'>Total price</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody >
                                            {
                                                cart_items.map((item, i) => {
                                                    return <>
                                                        <TableRow key={i}>
                                                            <TableCell>
                                                                {i + 1}
                                                            </TableCell>
                                                            <TableCell size='small'>
                                                                <img src={`${IMAGE}/${item.image}`} height={100} width={100} alt="" style={{ objectFit: "cover" }} />
                                                            </TableCell>
                                                            <TableCell className='text-center'>
                                                                <Typography style={{fontSize:"12px"}} >{item.name}</Typography>
                                                            </TableCell>
                                                            <TableCell className='text-center'>
                                                                <Typography style={{fontSize:"12px"}} >Rs. {item.price}</Typography>
                                                            </TableCell>
                                                            <TableCell className=' text-center'>
                                                                <Typography style={{fontSize:"12px"}} >{item.quantity}</Typography>
                                                            </TableCell>
                                                            <TableCell className='text-center'>
                                                                <Typography style={{fontSize:"12px"}} >Rs. {item.price * item.quantity}</Typography>
                                                            </TableCell>

                                                        </TableRow>
                                                    </>
                                                })
                                            }
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                                <div className='shippinginfo ms-5' style={{ width: "40%" }}>
                                    <h4 className='underlined my-2'>Shipping address</h4>
                                    <label htmlFor='street'>Address</label>
                                    <input type={'text'} className='form-control w-100' id='street' onChange={handleShippingAddress('shipping_address')} />

                                    <label className='mt-2' htmlFor='altstreet'>Alternate Street address</label>
                                    <input type={'text'} className='form-control w-100' id='altstreet' onChange={handleShippingAddress('alternate_shipping_address')} />

                                    <label className='mt-2' htmlFor='city'>City</label>
                                    <input type={'text'} className='form-control w-100' id='city' onChange={handleShippingAddress('city')} />

                                    <label className='mt-2' htmlFor='phone'>Phone</label>
                                    <input type={'number'} className='form-control w-100' id='phone' onChange={handleShippingAddress('phone')} />

                                    <button type='button' className='btn btn-warning mt-3 text-center w-100' onClick={updateShippingInfo}>
                                        {
                                            loading ?
                                                <span>Processing...</span> :
                                                <span>Save & Pay</span>
                                        }

                                    </button>

                                </div>
                            </div>
                        </> :

                        <div className='alert alert-danger'>No items in cart</div>
                }
            </div>

        </>
    )
}

export default ConfirmOrder;