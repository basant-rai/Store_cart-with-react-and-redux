import React, { useEffect, useState } from 'react'
import {viewCategory } from '../../../Api/categoryApi';
import AdminSidebar from '../../layout/AdminSidebar'
import { Link } from 'react-router-dom';

const ViewCategory = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        viewCategory()
            .then(data => {
                if (data.error) {
                    console.log(data.error)
                } else {
                    setCategories(data)
                }

            })
    }, [])

    return (
        <>
            <div className='container-fliud '>
                <div className='row '>
                    <div className='col-2 ps-0' >
                        <AdminSidebar category />
                    </div>
                    <div className='col-10 text-center mt-2 px-4'>
                        <div className='d-flex justify-content-between'>
                            <h4>
                                Categories
                            </h4>
                            <Link to='/admin/addcategory' className='btn btn-outline-success px-2'>Add category</Link>
                        </div>


                        <div className='my-5'>
                            <table className='table text-center table-bordered  table-striped'>
                                <thead>
                                    <tr>
                                        <th>S.N</th>
                                        <th>Category Name</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        categories.map((category, i) => {
                                            return <tr key={i}>
                                                <td>{i + 1}</td>
                                                <td>{category.category_name}</td>
                                                <td>
                                                    <div className='btn-group'>
                                                        <Link to={`/admin/updatecategory/${category._id}`} className='btn btn-secondary'><i class="bi bi-pencil-square"></i></Link>
                                                        <Link to={`/admin/deletecategory/${category._id}`}className='btn btn-warning'><i class="bi bi-trash"></i></Link>
                                                    </div>

                                                </td>
                                            </tr>
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                   
                    
                </div>
            </div>
        </>
    )
}

export default ViewCategory