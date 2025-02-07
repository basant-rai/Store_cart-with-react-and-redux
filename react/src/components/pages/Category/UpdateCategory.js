import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { getCategory, updateCategory } from '../../../Api/categoryApi'
import { isAuthenticated } from '../../../Api/userApi'
import AdminSidebar from '../../layout/AdminSidebar'

const UpdateCategory = () => {
    const { token } = isAuthenticated();
    const { id } = useParams();
    const [oldcategory, setOldCategory] = useState('')
    const [newcategory, setNewCategory] = useState('')
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        getCategory(id)
            .then(data => {
                if (data.error) {
                    setError(data.error)
                } else {
                    setOldCategory(data.category_name)
                }
            })

    }, [])

    const handleSubmit = () => {
        updateCategory(id, newcategory, token)
            .then(data => {
                if (data.error) {
                    setError(data.error)
                }
                else {
                    setSuccess(data.message)
                }
            })

    }

    const showError = () => {
        if (error) {
            return <div className='alert alert-danger'>{error}</div>
        }
    }

    const redirect = () => {
        if (success) {
            return navigate('/admin/viewcategory')
        }
    }
    return (
        <>
            <div className='container-fliud '>
                <div className='row '>
                    <div className='col-2 ps-0' >
                        <AdminSidebar category />
                    </div>
                    <div className='col-10 mt-2 px-4'>
                        <div className='d-flex justify-content-between'>
                            <h4>
                                Update Category
                            </h4>
                            <Link to='/admin/viewcategory' className='btn btn-outline-success px-5'>Back</Link>
                        </div>
                        {showError()}
                        {redirect()}
                        <div className='container mt-5 w-50'>
                            <label htmlFor='oldcategory' className='text-start'>Old Category Name</label>
                            <input type={'text'} id='oldcategory' className='form-control w-50 my-1' value={oldcategory} disabled />

                            <label htmlFor='newcategory' className='text-start'>New Category Name</label>
                            <input type={'text'} id='newcategory' className='form-control w-50 my-1' onChange={e => setNewCategory(e.target.value)} />
                            <button className="btn btn-warning mt-2" onClick={handleSubmit}>Update category</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UpdateCategory