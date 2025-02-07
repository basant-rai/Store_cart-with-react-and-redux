import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getFilteredProducts, viewproducts } from '../../Api/ProductApi';
import Card from '../Card';
import CheckboxCategories from '../CheckboxCategories';
import Nav from '../layout/NavBar';
import RadioPrices from '../RadioPrices';
// import Product from '../Product'
import "./deals.css";
import ViewProducts from './products/ViewProducts';

const Deals = () => {
    const [sortBy,setSortBy] = useState ('createdAt');
    const [order,setOrder] = useState("ASC");
    const [limit,setLimit] = useState(200000);
    const [skip,setSkip] = useState(0);
    const [products, setProducts] = useState([]);
    const [myfilter,setMyFilter] = useState({
        filters:{
            product_category:[],
            product_price:[]

        }
    })
    const handleFilters = (filters,filterBy) =>{
        const newFilters ={...myfilter}
        newFilters.filters[filterBy] = filters
        setMyFilter(newFilters)
        // console.log(myfilter)

    }

    useEffect(() => {
        console.log(myfilter)
        getFilteredProducts(sortBy,order,limit,skip,myfilter)
            .then(data => {
                if(data.error) {
                    console.log(data.error)
                } else {
                    setProducts(data.filteredProducts)
                    console.log(data)
                }
            }) 
    }, [myfilter])

    return (
        <>
            <Nav />
            <div className='row deals_bg' >
                <div className="inner mt-5">
                    <div className="container mx-auto text-start mt-5 ">sortBy
                        <div className="inner_box mx-5 py-5 ">
                            <h4 className="text-white mt-3">Product</h4>
                            <ul className="nav" style={{ display: "inline-flex", listStyleType: "none" }}>
                                <li className="nav-item"><Link className="fw-bold fs-6 text-white" style={{ textDecoration: "none" }}
                                    to="/">Home</Link></li>
                                <li className="nav-item active text-white fs-6 ps-2 ">
                                    <i className="fa-solid fa-angle-right"></i>
                                    Product
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-2 mt-5 position-sticky" style={{ borderRight: "2px solid yellow",top:"10%"}}>
                    <div className='ms-4'>
                        {/* <h2 className='deals ms-4 fw-bold ' >Deals</h2>
                        <ul className="list-unstyled ms-4 animate__animated animate__bounc text-white">
                            <li className='animate__animated animate__bounceInLef' >Deals of the day</li>
                            <li className='animate__animated animate__bounceInRigh'>Most Popular</li>
                            <li className='animate__animated animate__bounceInU' >Flash Sale</li>
                        </ul> */}
                        <h2 className='deals ms-4 fw-bold ' >Departments</h2>
                         <CheckboxCategories handleFilters={handleFilters}/>

                    </div>
                   
                    <div className=' ms-4 text-white'>
                        <h2 className='price ms-3 fw-bold ' >Price</h2>
                        <RadioPrices handleFilters={handleFilters}/>
            
                    </div>
                    <div className='ms-4 text-white'>
                        <h2 className="mt-3 ms-3 fw-bold discount">Discount</h2>
                    </div>
                </div>
                <div className=" col-10 row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4 mt-5">
                   {
                    products.map((product,i)=>{
                        return <Card key={i} item={product}/>
                    })
                   }
                </div>
            </div>
        </>
    )
}

export default Deals