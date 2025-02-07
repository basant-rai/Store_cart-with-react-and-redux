import React, { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { addcategory } from '../../../Api/categoryApi'
import { isAuthenticated } from '../../../Api/userApi'
import AdminSidebar from '../../layout/AdminSidebar'

const AddCategory = () => {
    const {token} = isAuthenticated();

    const [category,setCategory] = useState('')
    const[error,setError] = useState('');
    const [success,setSuccess] = useState('');
    const navigate = useNavigate();
    const handleSubmit =()=>{
        addcategory(category,token)
        .then(data=>{
            if(data.error){
                setError(data.error)
            }
            else{
                setSuccess(true)
            }
        })

    }

    const showError=()=>{
        if(error){
            return <div className='alert alert-danger'>{error}</div>
        }
    }

    const redirect =()=>{
        if(success){
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
                                Add Category
                            </h4>
                            <input className="form-control  w-25 rounded-5 border-2 " type="text" placeholder="Search" aria-label="Search" />

                            <Link to='/admin/viewcategory' className='btn btn-outline-success px-5'>Back</Link>
                        </div>
                        {showError()}
                        {redirect()}
                        <div className='container mt-5 w-50'>
                            <label htmlFor='category' className='text-start'>Category Name</label>
                            <input type={'text'} id='category' className='form-control w-50 my-1' onChange={e=>setCategory(e.target.value)}/>
                            <button className="btn btn-warning mt-2" onClick={handleSubmit}>Add</button>
                        </div>
                    </div>
                    
                </div>
            </div>
        </>
    )
}

export default AddCategory