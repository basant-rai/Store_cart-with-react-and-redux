import React, { useEffect, useRef, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { viewCategory } from '../../../Api/categoryApi'
import { productDetail, productUpdate } from '../../../Api/ProductApi'
import { isAuthenticated } from '../../../Api/userApi'
import { IMAGE } from '../../../config'
import AdminSidebar from '../../layout/AdminSidebar'

const UpdateProduct = () => {
    const [product, setProduct] = useState([])
    const [category, setCategory] = useState([])
    const [editProduct, setEditProduct] = useState({
        product_name: '',
        product_price: '',
        product_description: '',
        product_image: '',
        product_in_total: '',
        product_category: '',
        error: '',
        formData: ''
    })
    const [success,setSuccess] = useState(false)
    // destructured

    const { product_name, product_description, product_price, product_in_total, error, formData } = product
    const { token } = isAuthenticated()
    const { id } = useParams();
    const file_ref = useRef();
    const select_ref = useRef();

    useEffect(() => {
        productDetail(id)
            .then(data => {
                if (data.error) {
                    console.log(data.error)
                } else {
                    setProduct(data)
                }
            })
        viewCategory()
            .then(data => {
                if (data.error) {
                    console.log(data.error)
                } else {
                    setCategory(data)
                    setProduct({ ...product, formData: new FormData })
                }
            })
            .catch(err => console.log(err))
    }, [success])

    const handleChange = name => e => {
        if (name === 'product_image') {
            formData.set(name, e.target.files[0])
            setProduct({ ...product, [name]: e.target.files[0] })

        } else {
            formData.set(name, e.target.value)
            setProduct({ ...product, [name]: e.target.value })
        }
    }

    const handleClick = (e) => {
        e.preventDefault()
        productUpdate(id, product, formData,token)
            .then(data => {
                console.log(data)
                if (data.error) {
                    setProduct({ ...product, error: data.error })
                } else {
                    setProduct({ ...product, product_name: '', product_price: "", product_description: "", product_in_total: "" })
                    setSuccess(true)
                }
            })
    }

    const showError = () => {
        if (error) {
            return <div className='alert alert-danger'>{error}</div>
        }
    }
    const showSuccess = () => {
        if (success) {
            return <div className='alert alert-success'>Product successfully updated</div>
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
                                Update Product
                            </h4>
                            <Link to='/admin/viewproducts' className='btn btn-outline-success px-5'>Back</Link>
                        </div>

                        <div className='d-flex flex-column justify-content-center w-100 align-items-center'>
                            <img className='w-25 h-25 rounded-4' style={{ height: '100px' }} src={`${IMAGE}/${product.product_image} `} alt={`${IMAGE}/${product.product_image} `} />
                            <div>
                                <p className='fw-bold mt-2' style={{textTransform:"capitalize"}}>{product.product_name}</p>
                            </div>
                        </div>
                        {
                            !success &&
                            <form className='p-5 my-5 shadow-lg w-75 mx-auto'>
                                {showError()}
                                {showSuccess()}
                                <label htmlFor='productname'>Product Name:</label>
                                <input type={'text'} id='productname' className='form-control mb-2' onChange={handleChange("product_name")} value={product_name} />

                                <label htmlFor='productprice'>Product price:</label>
                                <input type={'text'} id='productprice' className='form-control mb-2' onChange={handleChange("product_price")} value={product_price} />

                                <label htmlFor='productdescription'>Product description:</label>
                                <textarea rows={5} id='productdescription' className='form-control mb-2' onChange={handleChange("product_description")} value={product_description} />

                                <label htmlFor='productintotal'>Total Product:</label>
                                <input type={'number'} id='productintotal' className='form-control mb-2' onChange={handleChange("product_in_total")} value={product_in_total} />

                                <label htmlFor='productimage'>Product Image:</label>
                                <input type={'file'} id='productimage' className='form-control mb-2' onChange={handleChange("product_image")} />

                                <label htmlFor='category'>Category</label>
                                <select id='category' className='form-control mb-2' onChange={handleChange('product_category')}>
                                    <option>select</option>
                                    {
                                        category.map((category, i) => {
                                            return <option key={i} value={category._id}>{category.category_name}</option>
                                        })
                                    }
                                </select>

                                <button className='btn btn-warning' onClick={handleClick}>Update Product</button>
                            </form>
                        }

                    </div>
                </div>
            </div>
        </>
    )
}

export default UpdateProduct