import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom'
import { getRelatedProducts, productDetail } from '../../Api/ProductApi';
import { IMAGE } from '../../config';
import { addItemToCart } from '../../Redux/Action/cartAction';
import Card from '../Card';
import Nav from '../layout/NavBar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const DetailsProduct = () => {

    const { id } = useParams();
    const [product, setProduct] = useState([]);
    const [relatedProducts, setRelatedProducts] = useState([]);
    const dispatch = useDispatch();
    const [success,setSuccess] = useState(false);

    useEffect(() => {
        productDetail(id)
            .then(data => {
                if (data.error) {
                    console.log(data.error)
                } else {
                    setProduct(data)
                }
            })
        getRelatedProducts(id)
            .then(data => {
                if (data.error) {
                    console.log(data.error)
                } else {
                    setRelatedProducts(data)
                }
            })
    }, [id,success])

    const addToCart=()=>{
        setSuccess(false)
        dispatch(addItemToCart(id,1))
        .then(()=>{
            toast.success("ITEM ADDES TO CART")
            setSuccess(true)
        })

    }
    return (
        <>
        <ToastContainer them="colored" position='top-right'/>
            <div className='w-75 mx-auto my-5 p-5 shadow-lg d-flex' >
                <div className='image-div w-100'>
                    <img src={`${IMAGE}/${product.product_image}`} className='w-100' />

                </div>
                <div className='product-description mt-5'>
                    <h3>Name:{product.product_name}</h3>
                    <h4>Price:{product.product_price}</h4>
                    <h5>Available product:{product.product_in_total}</h5>
                    <p>Description:{product.product_description}</p>
                    <button onClick={addToCart}className='btn btn-warning'>Add to cart</button>
                </div>
            </div>
            <div className=" col-10 row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4 mt-5">
                   {
                    relatedProducts.map((product,i)=>{
                        return <Card key={i} item={product}/>
                    })
                   }
                </div>
        </>

    )
}

export default DetailsProduct;