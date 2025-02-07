import React from 'react'
import { Link } from 'react-router-dom'

const AdminSidebar = ({ product, category, user, order }) => {
    return (
        <>
            <div className="container-fluid position-fixed d-flex flex-column flex-shrink-0 p-1 text-white bg-dark h-100" style={{ width: "200px", height: '100vh', }}>
                <Link to="/admin/dashboard" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                    <span className="fs-4">
                        <i className="bi bi-speedometer2 me-3"></i>
                        Dashboard</span>
                </Link>
                <hr />
                <ul className="nav nav-pills flex-column mb-auto">
                    <li className="nav-item">
                        <Link to="/" className="nav-link text-white" aria-current="page">
                            <i className="bi bi-arrow-left  me-3"></i>
                            Back to Home
                        </Link>
                    </li>

                    <li>
                        {
                            category ?
                                <Link to="/admin/viewcategory" className="nav-link text-white active" aria-current="page">
                                    <i className="bi bi-table me-3"></i>
                                    Category
                                </Link> :
                                <Link to="/admin/viewcategory" className="nav-link text-white" aria-current="page">
                                    <i className="bi bi-table me-3"></i>
                                    Category
                                </Link>
                        }
                    </li>
                    <li>
                        {
                            product ?
                                <Link to="/admin/viewproducts" className="nav-link text-white active">
                                    <i className="bi bi-grid me-3"></i>
                                    Products
                                </Link> :
                                <Link to="/admin/viewproducts" className="nav-link text-white">
                                    <i className="bi bi-grid me-3"></i>
                                    Products
                                </Link>
                        }
                    </li>

                    <li>
                        {
                            order ?
                                <Link to="/admin/vieworders" className="nav-link text-white active">
                                    <i className="bi bi-grid me-3"></i>
                                    Orders
                                </Link> :
                                <Link to="/admin/vieworders" className="nav-link text-white">
                                    <i className="bi bi-grid me-3"></i>
                                    Orders
                                </Link>
                        }
                    </li>
                </ul>

            </div>

        </>
    )
}

export default AdminSidebar