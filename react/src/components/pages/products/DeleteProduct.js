import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { deleteProduct, productDetail } from '../../../Api/ProductApi'
import { isAuthenticated } from '../../../Api/userApi'
import { IMAGE } from '../../../config'
import AdminSidebar from '../../layout/AdminSidebar'

const DeleteProduct = () => {
    const [product, setProduct] = useState([])
    const { id } = useParams();
    const { token } = isAuthenticated();
    const [error, setError] = useState();
    const [success, setSuccess] = useState('');

    useEffect(() => {
        productDetail(id)
            .then(data => {
                if (data.error) {
                    console.log(data.error)
                } else {
                    setProduct(data)

                }

            })
    }, [])

    const handleClick = (e) => {
        e.preventDefault();
        deleteProduct(id, token)
            .then(data => {
                if (data.error) {
                    setError(data.error)
                    setSuccess('')
                } else {
                    setSuccess(data.message)
                    setError('')
                }
            })
    }
    const showSucccess = () => {
        if (success) {
            return <div className='alert alert-success'>{success}</div>
        }
    }
    const showError = () => {
        if (error) {
            return <div className='alert alert-danger'>{error}</div>
        }
    }
    return (
        <>
            <div className='container-fliud '>
                <div className='row '>
                    <div className='col-2 ps-0' >
                        <AdminSidebar product />
                    </div>
                    <div className='col-10 mt-2 px-4'>
                        <div className='d-flex justify-content-between'>
                            <h4>
                                Delete Product
                            </h4>
                            <Link to='/admin/viewproducts' className='btn btn-outline-success px-5'>Back</Link>
                        </div>
                        {showError()}
                        {showSucccess()}
                        <div className='d-flex'>

                            <img className='w-2' style={{ height: '100px' }} src={`${IMAGE}/${product.product_image}`} alt={`${IMAGE}/${product.product_image} `} />
                            <div>
                                <h4>{product.product_name}</h4>
                            </div>
                        </div>
                        {
                            !success &&
                            <button className='btn btn-danger mt-2' onClick={handleClick}>Delete</button>

                        }
                    </div>

                </div>
            </div>
        </>
    )
}

export default DeleteProduct