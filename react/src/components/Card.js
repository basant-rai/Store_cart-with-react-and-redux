import React from 'react'
import { Link } from 'react-router-dom'
import { IMAGE } from '../config'
// import {Button} from "@mui/material";

const Card = ({ item }) => {
    return (
        <>
            <div className='col mt-2 col-md-6 ' >
                <div className="card shadow-lg  " >
                    <img style={{ width: "100%", height: "300px" }} src={`${IMAGE}/${item.product_image}`} className="card-img-top shadow" alt="..." />
                    <div className='card-title mx-auto mt-2'>
                        <h4 className="fw-bold " style={{ animationDuration: "" }}>{item.product_name}</h4>
                    </div>
                    <div className="card-body ">
                        <p className="card-text text-center text-truncate">{item.product_description}</p>
                        <div className='text-center'>
                            <Link to={`/productdetails/${item._id}`} className='btn btn-warning'>View product</Link>
                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}

export default Card