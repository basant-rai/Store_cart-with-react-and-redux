import React from 'react'
import { useDispatch } from 'react-redux';
import { toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Card = ({ product }) => {
    const dispatch =useDispatch();

    const add =()=>{
        dispatch({type:"ADD TO CART",display:product})
        toast.success(`${product.item_title} added to cart`)
    }


    return (
        <>
            <div className='col mb-3'>
                <div className="card text-center">
                    <img src={product.item_image} className="card-img-top" style={{height:'500px'}} alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{product.item_title}</h5>
                        <p className="card-text text-truncate" >{product.item_description}</p>
                        <h4 className='mb-3 fw-bold'>{product.item_price}</h4>
                        <button className='btn btn-warning text-center' onClick={add}>Add to cart</button>                       
                    </div>

                </div>
            </div>
        </>
    )
}

export default Card