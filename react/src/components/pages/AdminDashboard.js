import React, { useEffect, useState } from 'react'
import AdminSidebar from '../layout/AdminSidebar'
import { getOrders } from '../../Api/orderAPI';
import { getUsersList } from '../../Api/userApi';
import { viewproducts } from '../../Api/ProductApi';

const AdminDashboard = () => {
    const [orders, setOrders] = useState([]);
    const [users, setUsers] = useState([]);
    const [products, setProducts] = useState([]);


    useEffect(() => {
        getOrders()
            .then((res) => setOrders(res))
            .catch((err) => console.log(err));
    }, []);

    useEffect(() => {
        getUsersList()
            .then((res) => setUsers(res))
            .catch((err) => console.log(err));
    }, []);

    useEffect(() => {
        viewproducts("createdAt", "DESC", 20000)
            .then((res) => setProducts(res))
            .catch((err) => console.log(err));
    }, []);
    return (
        <>
            <div className='container-fliud'>
                <div className='row '>
                    <div className='col-2 ps-0' >
                        <AdminSidebar />
                    </div>
                    <div className='col-10 mt-2'>
                        <div className=''>
                            <h1>Welcome to Dashboard</h1>
                            <div className='d-flex mt-5 pe-5 gap-5'>
                                <div className='w-100 cols fs-1 fw-bold border d-flex flex-column justify-content-center align-items-center rounded-2 px-2 py-4 '>
                                    <p className='fs-2'>Total Orders:&nbsp;</p>
                                    {
                                        orders.length > 0 ?
                                            <span>{orders.length}</span> :
                                            <span>0</span>
                                    }
                                </div>
                                <div className='w-100 cols fs-1 fw-bold border d-flex flex-column justify-content-center align-items-center rounded-2 px-2 py-4'>
                                    <p className='fs-2'>Total Users:&nbsp;</p>
                                    {
                                        users.length > 0 ?
                                            <span>{users.length}</span> :
                                            <span>0</span>
                                    }
                                </div>
                                <div className='w-100 cols fs-1 fw-bold border d-flex flex-column justify-content-center align-items-center rounded-2 px-2 py-4'>
                                    <p className='fs-2'>Total Food Item:&nbsp;</p>
                                    {
                                        products.length > 0 ?
                                            <span>{products.length}</span> :
                                            <span>0</span>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AdminDashboard