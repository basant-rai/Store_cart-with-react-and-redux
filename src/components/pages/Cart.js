import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import Nav from '../layout/Nav';
const Cart = () => {
    const cart_selector = useSelector(store => store.cart_store.cart_name)
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const payment = () => {
        return navigate('/payment/1000,100,100')
    }
    return (
        <>
        <Nav/>
            <div className='container mx-auto'>
                {
                    cart_selector.length > 0 ?
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">S.N</th>
                                    <th scope="col">Picture</th>
                                    <th scope="col">Description</th>
                                    <th scope="col">Price</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>{
                                (cart_selector).map(
                                    (cart_item, ci) => {
                                        return <tr key={cart_item.item_id}>
                                            <td>{ci + 1}</td>
                                            <td><img src={cart_item.item_image} alt='img' height={"300px"} /></td>
                                            <td  >
                                                <h2 className='mt-5'>{cart_item.item_title}</h2>
                                                <h6 style={{ width: '80%' }}>{cart_item.item_description}</h6>
                                            </td>
                                            <td ><h4 className='mt-5'>{cart_item.item_price}</h4></td>
                                            <td><buton className="btn btn-danger mt-5" onClick={() => { dispatch({ type: "REMOVE FROM CART", display: cart_item }) }}>Delete</buton>
                                            <button className='btn btn-warning ms-2 mt-5' onClick={payment}>Buy</button>
                                            </td>
                                        </tr>
                                    }
                                )}
                            </tbody>

                        </table>
                        : <div>There is no items in cart</div>
                }
            </div>

        </>
    )
}

export default Cart