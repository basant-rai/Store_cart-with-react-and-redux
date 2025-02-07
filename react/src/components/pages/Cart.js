import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { IMAGE } from '../../config';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addItemToCart, removeItemFromCart } from '../../Redux/Action/cartAction';
import { Link } from 'react-router-dom';


const Cart = () => {

    const cart_items = useSelector(state => state.cart.cart_items) ?? []
    const no_of_items_in_cart = cart_items.map(i => i.quantity) ?? []
    const total_items = no_of_items_in_cart.length > 0 && no_of_items_in_cart.reduce((acc, cur) => {
        return acc + cur
    })

    const individual_total = cart_items.length > 0 && cart_items?.map(i => i.quantity * i.price)
    const total_price = individual_total.length > 0 && individual_total.reduce((acc, cur) => acc + cur)

    const dispatch = useDispatch()
    const increaseItem = (item) => e => {
        e.preventDefault();
        let quantity = item.quantity
        let stock = item.stock
        quantity++
        if (quantity > stock) {
            toast.error(item.name + "Out of stock")
        } else {
            dispatch(addItemToCart(item.product, quantity))
            toast.success(item.name + "Count increased in cart")
        }
    }

    const decreaseItem = (item) => e => {
        e.preventDefault();
        let quantity = item.quantity
        // let stock = item.stock
        quantity--
        if (quantity == 0) {
            dispatch(removeItemFromCart(item.product))
            toast.error(item.name + "Item has been removed succesfully")
        } else {
            dispatch(addItemToCart(item.product, quantity))
            toast.warning(item.name + "Count decreased in cart")
        }
    }
    const removeItem = (item) => e => {
        e.preventDefault();
        dispatch(removeItemFromCart(item.product))
        toast.warning(item.name + "Item removed from cart")
    }
    return (
        <>
            <ToastContainer theme='colored' position='top-right' />
            <div className='row m-5 p-5'>
                {
                    cart_items && cart_items.length > 0 ?
                        <>
                            <div className='d-flex'>
                                <TableContainer className=" mt-3 mx-auto text-center" sx={{ width: "70%", padding: "0px 20px", border: "5px solid grey", borderRadius: "20px" }}>
                                    <h3 className='text-center'>Cart Item</h3>
                                    <Table>
                                        <TableHead className="text-center">
                                            <TableRow >
                                                <TableCell size="small">SN</TableCell>
                                                <TableCell size='small'>Food Image</TableCell>
                                                <TableCell className='text-center'>Food Name</TableCell>
                                                <TableCell className='text-center'>Unit price</TableCell>
                                                <TableCell className='text-center'>Quantity</TableCell>
                                                <TableCell className='text-center'>Total price</TableCell>
                                                <TableCell className='text-center'>Action</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody >
                                            {
                                                (cart_items || []).map((item, i) => {
                                                    return <>
                                                        <TableRow key={i}>
                                                            <TableCell>
                                                                {i + 1}
                                                            </TableCell>
                                                            <TableCell size='small'>
                                                                <img src={`${IMAGE}/${item.image}`} height={100} width={100} alt="" style={{ objectFit: "cover" }} />                                                            </TableCell>
                                                            <TableCell className='text-center' >
                                                                <Typography style={{fontSize:"12px"}} >{item.name}</Typography>
                                                            </TableCell>
                                                            <TableCell className='text-center'>
                                                                <Typography style={{fontSize:"12px"}}>Rs. {item.price}</Typography>
                                                            </TableCell>
                                                            <TableCell className='w-25 mx-auto'>
                                                                <div className="btn-group">
                                                                    <button type='button' className='btn btn-danger' onClick={decreaseItem(item)}>-</button>
                                                                    <input type={'text'} className='w-50 text-center border-none' readOnly value={item.quantity || 0} />
                                                                    <button type='button' className='btn btn-dark' onClick={increaseItem(item)}>+</button>
                                                                </div>
                                                            </TableCell>
                                                            <TableCell className='text-center'>
                                                                <Typography style={{fontSize:"12px"}} >Rs. {item.price * item.quantity}</Typography>
                                                            </TableCell>
                                                            <TableCell className='text-center'>
                                                                <button className='btn' type='button' onClick={removeItem(item)} >
                                                                    <i className='bi bi-trash fs-6 text-danger' />
                                                                </button>
                                                            </TableCell>
                                                        </TableRow>
                                                    </>
                                                })
                                            }
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                                <div className='p-3 m-5 shadow-lg rounded-4' syle={{ height: '50px', width: "30%" }}>
                                    <h4 className='underlined my-2'>Order Summary</h4>
                                    <hr />
                                    <h6 className='underlined my-2'>Total Items:{total_items}</h6>
                                    <h6 className='underlined my-2'>Total Price:{total_price}</h6>
                                    <hr />
                                    <Link to='/confirmorder' className='btn btn-warning mt-3 text-center'>Checkout</Link>
                                </div>
                            </div>
                        </> :

                        <div className='alert alert-danger'>No items in cart</div>
                }
            </div>

        </>
    )
}

export default Cart