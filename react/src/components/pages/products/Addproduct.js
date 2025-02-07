import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { viewCategory } from '../../../Api/categoryApi'
import { addProduct } from '../../../Api/ProductApi'
import { isAuthenticated } from '../../../Api/userApi'
import AdminSidebar from '../../layout/AdminSidebar'
import Footer from '../../layout/Footer'

const AddProduct = () => {

    const [category, setCategory] = useState([])
    const file_ref = useRef()
    const select_ref = useRef()
    

    const [product, setProduct] = useState({
        product_name: '',
        product_price: '',
        product_description: '',
        product_image: '',
        product_in_total: '',
        product_category: '',
        error: '',
        success: false,
        formData: ''
    })
    // destructured

    const { product_name, product_description, product_image, product_price, product_in_total, success, error, formData } = product
    const { token } = isAuthenticated()


    useEffect(() => {
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
    }, [])

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
        addProduct(formData, token)
            .then(data => {
                if (data.error) {
                    setProduct({ ...product, error: data.error })
                } else {
                    setProduct({ ...product, success: true, product_name: '', product_price: "", product_description: "", product_in_total: "" })
                    file_ref.current.value = null
                    select_ref.current.value = null
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
            return <div className='alert alert-success'>Added successfully</div>
        }
    }

    return (
        <>
            {/* <Nav/> */}
            <div className='container-fliud '>
                <div className='row '>
                    <div className='col-2 ps-0' >
                        <AdminSidebar product />
                    </div>
                    <div className='col-10  mt-2 px-4'>
                        <div className='d-flex justify-content-between'>
                            <h4>
                                Add product
                            </h4>
                            <Link to='/admin/viewproducts' className='btn btn-outline-success px-2'>Back</Link>
                        </div>
                       
                        <hr className='my-2' />
                        <form className='p-5 my-5 shadow-lg w-75 mx-auto'>
                        {
                            showError()
                        }
                        {
                            showSuccess()
                        }
                            <label htmlFor='productname'>Product Name:</label>
                            <input type={'text'} id='productname' className='form-control mb-2' onChange={handleChange("product_name")} value={product_name} />

                            <label htmlFor='productprice'>Product price:</label>
                            <input type={'text'} id='productprice' className='form-control mb-2' onChange={handleChange("product_price")} value={product_price} />

                            <label htmlFor='productdescription'>Product description:</label>
                            <textarea rows={5}  id='productdescription' className='form-control mb-2' onChange={handleChange("product_description")} value={product_description} />

                            <label htmlFor='productintotal'>Total Product:</label>
                            <input type={'number'} id='productintotal' className='form-control mb-2' onChange={handleChange("product_in_total")} value={product_in_total} />

                            <label htmlFor='productimage'>Product Image:</label>
                            <input type={'file'} id='productimage' className='form-control mb-2' onChange={handleChange("product_image")} ref={file_ref} />

                            <label htmlFor='category'>Category</label>
                            <select id='category' className='form-control mb-2' onChange={handleChange('product_category')} ref= {select_ref}>
                                <option>select</option>
                                {
                                    category.map((category, i) => {
                                        return <option key={i} value={category._id}>{category.category_name}</option>
                                    })
                                }
                            </select>

                            <button className='btn btn-warning' onClick={handleClick}>AddProduct</button>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default AddProduct;