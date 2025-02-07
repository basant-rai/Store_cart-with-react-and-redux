import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { viewproducts } from '../../../Api/ProductApi'
import { IMAGE } from '../../../config'
import AdminSidebar from '../../layout/AdminSidebar'
import Footer from '../../layout/Footer'

const ViewProducts = () => {
    const [sortBy, setSortBy] = useState('createdAt');
    const [order, setOrder] = useState('DESC')
    const [limit, setLimit] = useState(10)
    const [products, setProduct] = useState([])

    useEffect(() => {
        viewproducts(sortBy, order, limit)
            .then(data => {
                if (data.error) {
                    console.log(data.error)
                } else {
                    setProduct(data)
                }

            })
    }, [limit, order, sortBy])
    return (
        <>
            {/* <Nav/> */}
            <div className='container-fliud '>
                <div className='row '>
                    <div className='col-2 ps-0' >
                        <AdminSidebar product />
                    </div>
                    <div className='col-10 mt-2 px-4'>
                        <div className='d-flex justify-content-between'>
                            <h4>
                                Categories
                            </h4>
                            <Link to='/admin/addproduct' className='btn btn-outline-success px-2'>Add Product</Link>
                        </div>


                        <div className='my-5'>
                            <table className='table table-bordered  table-striped'>
                                <thead>
                                    <tr>
                                        <th>S.N</th>
                                        <th>Product Name</th>
                                        <th>Product image</th>
                                        <th>Product description</th>
                                        <th>Price</th>
                                        <th>Quantity</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        products.map((product, i) => {
                                            return <tr key={i}>
                                                <td>{i + 1}</td>
                                                <td>{product.product_name}</td>
                                                <td><img className='w-2' style={{ height: '100px' }} src={`${IMAGE}/${product.product_image} `} alt={`${IMAGE}/${product.product_image} `} /></td>
                                                <td>{product.product_description}</td>
                                                <td>{product.product_price}</td>
                                                <td>{product.product_in_total}</td>
                                                <td>
                                                    <div className='btn-group'>
                                                        <Link to={`/admin/editproduct/${product._id}`} className='btn btn-secondary'><i class="bi bi-pencil-square"></i></Link>
                                                        <Link to={`/admin/deleteproduct/${product._id}`} className='btn btn-warning'><i class="bi bi-trash"></i></Link>
                                                    </div>

                                                </td>
                                            </tr>
                                        })
                                    }
                                </tbody>
                            </table>
                            <div className='text-center '>

                                <button className='btn btn-warning mt-4 ' onClick={() => { setLimit(limit + 3) }}>Show more</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ViewProducts;