import React from 'react'
import AdminSidebar from '../layout/AdminSidebar'
import Nav from '../layout/NavBar'

const CategoryAdmin = () => {
  return (
    <>
      <Nav />
      <div className='container-fliud '>
        <div className='row '>
          <div className='col ps-0'>
            <AdminSidebar />
          </div>
          <div className='col-md-9 text-center'>
            <div className='d-flex justify-content-between'>
              <h4>
                Categories
              </h4>
              <input className="form-control  w-25 rounded-5 border-2 " type="text" placeholder="Search" aria-label="Search" />
              <Link to='/admin/addcategory' className='btn btn-outline-success px-2'>Add category</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CategoryAdmin