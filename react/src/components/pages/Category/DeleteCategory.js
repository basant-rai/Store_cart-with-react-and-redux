import React from 'react'
import { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { deleteCategory, getCategory } from '../../../Api/categoryApi'
import { isAuthenticated } from '../../../Api/userApi'
import AdminSidebar from '../../layout/AdminSidebar'

const DeleteCategory = () => {
  const { token } = isAuthenticated();
  const { id } = useParams();
  const [category, setCategory] = useState('')
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    getCategory(id)
      .then(data => {
        if (data.error) {
          setError(data.error)
        } else {
          setCategory(data.category_name)
        }
      })

  }, [])

  const deleteClick = () => {
    deleteCategory(id, token)
      .then(data => {
        if(data.error){
          console.log(data)
          setError(data.error)
          console.log(data.error)
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
                Delete Category
              </h4>
              <Link to='/admin/viewcategory' className='btn btn-outline-success px-5'>Back</Link>
            </div>
            {showError()}
            {redirect()}
            <div className='container mt-5 w-50'>
              <label htmlFor='category' className='text-start'>Category Name</label>
              <input type={'text'} id='category' className='form-control w-50 my-1' value={category} disabled />
              <button className="btn btn-warning mt-2" onClick={deleteClick}>Delete category</button>
            </div>
          </div>

        </div>
      </div>

    </>
  )
}

export default DeleteCategory